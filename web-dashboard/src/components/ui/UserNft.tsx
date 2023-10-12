import { useState, useEffect } from 'react'
export default function UserNft({ userNft }) {
  // tính giờ
  const convertNanoSecondToHumanTime = (nanoSecond) => {
    const unixTime = parseInt(nanoSecond)
    const date = new Date(unixTime / 1000000)
    const month = date.toLocaleString('en-US', { month: 'short' })
    const year = date.getFullYear()
    return `${date.getDate()} ${month} ${year}`
  }

  const [isExtend, setExtend] = useState(false)
  const [loading, setLoading] = useState(true)
  const [time, setTime] = useState('')

  const extendExpired = async (token_id, time, amount) => {
    let rs = await window['rabbitNft'].extendExpired(
      `${token_id}`,
      time * 2592000000000000,
      `${amount}`
    )
  }
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      window['rabbitNft'].getNftInfo(userNft.token_id).then(
        (result) => {
          result.token_id = userNft.token_id
          setTime(convertNanoSecondToHumanTime(result.expires_at))
        },
        (error) => {
          setLoading(false)
        }
      )
    }, 1000)

    setLoading(false)
  }, [])
  return (
    !loading && (
      <div key={userNft.token_id} className="col-span-1 md:col-span-2 lg:col-span-3">
        <div className="w-full p-2 text-center space-y-2">
          <div className="w-24 mx-auto">
            <img
              src={userNft.metadata.media}
              alt="media"
              className="h-24 w-full shadow-lg rounded-full shadow-lg"
            />
          </div>
          <div className="text-sm font-bold">{userNft.metadata.title}</div>
          <div className="text-sm">Expired At: {time}</div>
          <div className="relative flex flex-col items-center justify-center text-center">
            <button
              id="dropdownDefaultButton"
              className="flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-52"
              type="button"
              onClick={() => {
                setExtend((prev) => !prev)
              }}
            >
              Extend Now
              <svg
                className="w-4 h-4 ml-2"
                // ariaHidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isExtend && (
              <div
                id="dropdown"
                className="absolute z-100 bg-white divide-y divide-gray-900 rounded-lg shadow w-52 bg-slate-300 top-11"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  // ariaLabelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault()
                        const amount =
                          userNft.metadata.title === 'Mythic'
                            ? '10'
                            : userNft.metadata.title === 'Rare'
                            ? '5'
                            : '1'
                        extendExpired(userNft.token_id, 1, amount)
                      }}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      1 Month
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault()
                        const amount =
                          userNft.metadata.title === 'Mythic'
                            ? '10'
                            : userNft.metadata.title === 'Rare'
                            ? '5'
                            : '1'
                        extendExpired(userNft.token_id, 3, amount)
                      }}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      3 Month
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault()
                        const amount =
                          userNft.metadata.title === 'Mythic'
                            ? '10'
                            : userNft.metadata.title === 'Rare'
                            ? '5'
                            : '1'
                        extendExpired(userNft.token_id, 6, amount)
                      }}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      6 Month
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  )
}
