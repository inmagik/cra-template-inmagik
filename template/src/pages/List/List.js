import React from 'react'
import useDebounceQueryParams from 'magik-react-hooks/useRouterDebounceQueryParams'
import { useRunRj } from 'react-rocketjump'
import Paginator from '../../components/Paginator'
import { ListState } from '../../state/entity'
import Layout from '../../components/Layout/Layout'

export default function List() {
  const [
    queryParams,
    setQueryParams,
    debQueryParams,
    setDebQueryParams,
  ] = useDebounceQueryParams()

  const [{ list, pagination }, { removeEntity }] = useRunRj(
    ListState,
    [debQueryParams],
    false
  )

  return (
    <Layout>
      <div className="container-fluid mt-2">
        <div className="mb-2 d-flex">
          <input
            placeholder="Search"
            className="form-control w-auto"
            value={queryParams.search ?? ''}
            onChange={(e) =>
              setDebQueryParams({
                search: e.target.value,
                page: 1,
              })
            }
          />
          <select
            className="form-control w-auto ml-2"
            value={queryParams.foo ?? ''}
            onChange={(e) =>
              setQueryParams({
                foo: e.target.value,
                page: 1,
              })
            }
          >
            <option value="">--</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
          </select>
          <button
            className="btn btn-secondary ml-2"
            onClick={() => setQueryParams(() => {})}
          >
            Clear
          </button>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Foo</th>
                <th>Bar</th>
                <th>Baz</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {list &&
                list.map((entry) => (
                  <tr key={entry.id}>
                    <td>{entry.foor}</td>
                    <td>{entry.bar}</td>
                    <td>{entry.baz}</td>
                    <th>
                      <button
                        onClick={() => removeEntity(entry)}
                        className="btn btn-danger"
                      >
                        DELETE
                      </button>
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <Paginator
          numPages={pagination.numPages}
          currentPage={+debQueryParams.page || 1}
          goToPage={(page) => setQueryParams({ page })}
        />
      </div>
    </Layout>
  )
}
