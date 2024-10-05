import { useEffect, useState } from "react"

function useFetch(fetchFn,initialValue){
    const [data,setData] = useState(initialValue)
    const [loading,setLoading] = useState()
    const [error,setError] = useState()

    useEffect(()=>{
        async function fetchData(){
          setLoading(true)
          try {
            const data = await fetchFn()
            setData(data)
          } catch (error) {
            setError({
              message:error.message || 'Failed to fetch data.'
            })
          }
          setLoading(false)
        }
        fetchData()
      },[fetchFn])

    return {loading:loading,
            fetchedData:data,
            setFetchedData:setData,
            error:error
        }
}

export default useFetch