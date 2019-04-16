const http = require('http')
const fs = require('fs')
const path = require('path')
const mime = require('mime')

const cache = {}

// 404
function send404(response) {
  response.writeHead(404, { 'Content-Type': 'text/plain' })
  response.write('Error 404: resource not found')
  response.end()
}

// 发送文件
function sendFile(response, filePath, fileContents) {
  response.writeHead(200, { 'Content-Type': mime.lookup(path.basename(filePath)) })
  response.end(fileContents)
}

// 提供静态文件服务
function serveStatic(response, cache, absPath) {
  if (cache[absPath]) { // 检查文件是否在缓存中
    sendFile(response, absPath, cache[absPath]) // 从内存中返回文件
  } else {
    fs.exists(absPath, (exists) => { // 检查文件是否存在
      if (exists) {
        fs.readFile(absPath, (err, data) => { // 从硬盘中读取文件
          if (err) {
            send404(response)
          } else {
            cache[absPath] = data
            sendFile(response, absPath, data) // 返回文件
          }
        })
      } else {
        send404(response) // 404
      }
    })
  }
}

const server = http.createServer((request, response) => {
  let filePath = false

  if (request.url === '/') {
    filePath = 'public/index.html' // 返回默认HTML文件
  } else {
    filePath = 'public' + request.url
  }

  const absPath = './' + filePath
  serveStatic(response, cache, absPath)
})

server.listen(3000, () => {
  console.log('Server listening on port 3000')
})