import React, { useState } from 'react'
import Form from './antd'
import 'antd/dist/antd.css'

const schema = {
  title: 'Todo',
  type: 'object',
  required: ['title', 'description'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task', description: 'your name' },
    done: { type: 'boolean', title: 'Done?', default: false },
    description: { type: 'string', title: 'Description' },
    sex: {
      type: 'string',
      title: 'Sex',
      enum: [
        'screen',
        'multiply',
        'overlay'
      ],
      enumNames: [
        'Screen',
        'Multiply',
        'Overlay'
      ]
    }
  }
}

const log = (type) => console.log.bind(console, type)

function App () {
  const [formData, setFormData] = useState({})

  return (
    <div className="App">
      <Form schema={schema}
        formData={formData}
        liveValidate={true}
        onChange={({ formData }) => {
          console.log(formData)
          setFormData(formData)
        }}
        onSubmit={log('submitted')}
        onError={log('errors')} />
    </div>
  )
}

export default App
