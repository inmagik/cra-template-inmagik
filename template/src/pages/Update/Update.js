import React from 'react'
import { useRunRj } from 'react-rocketjump'
import { useParams } from 'react-router-dom'
import ExampleForm from '../../components/ExampleForm/ExampleForm'
import Layout from '../../components/Layout/Layout'
import { DetailState } from '../../state/entity'

export default function Update() {
  const { id } = useParams()
  const [{ data }, { updateEntity }] = useRunRj(DetailState, [id])

  return (
    <Layout>
      <div className="container-fluid mt-2">
        {data && <ExampleForm
          entity={data}
          save={(entity) => updateEntity.asPromise(id, entity)}
        />}
      </div>
    </Layout>
  )
}
