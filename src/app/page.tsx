import WorkHistoryList from "./components/WorkHistoryList"

const page = async () => {
  const response = await fetch('http://localhost:3000/workHistory')

  const data = await response.json()

  return (
    <>
      <WorkHistoryList workHistoryList={data.workHistory} />
    </>
  )
}

export default page
