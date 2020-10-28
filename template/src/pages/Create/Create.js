import React from 'react'
import { useRj } from 'react-rocketjump'
import ExampleForm from '../../components/ExampleForm/ExampleForm'
import Layout from '../../components/Layout/Layout'
import { CreateState } from '../../state/entity'

export default function Create() {
  const [, { run }] = useRj(CreateState)
  return (
    <Layout>
      <div className="container-fluid mt-2">
        <ExampleForm save={entity => run.asPromise(entity)} />
      </div>
    </Layout>
  )
}
