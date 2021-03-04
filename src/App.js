import { useEffect, useState } from 'react'
import classNames from 'classnames'
import BounceLoader from 'react-spinners/BounceLoader'

import './App.css'

const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

const color = '#ff0000'

const App = () => {
  const [apiResonse, setApiResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const appClasses = classNames('o-app', {
    'o-app--loading': isLoading,
  })

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className={appClasses}>
      {isLoading ? (
        <div className="o-loading-container">
          <BounceLoader color={color} loading size={100} />
          <pre>Fetching Data</pre>
        </div>
      ) : (
        <>
          <div className="o-sticky-header">
            <h1 className="c-title">IBM Bell - React Fetch Test</h1>
          </div>
          <div className="o-main-content">
            <ul className="o-grid-container">
              {!!apiResonse &&
                apiResonse.map(({ title, body }, index) => (
                  <button className="c-button">
                    <li key={`item-${index}`} className="c-item">
                      <h3 className="c-item-title">{title}</h3>
                      <p className="c-item-body">{body}</p>
                    </li>
                  </button>
                ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default App
