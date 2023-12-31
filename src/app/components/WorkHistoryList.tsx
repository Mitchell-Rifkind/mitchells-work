interface workHistoryItem {
  company: string,
  title: string,
  dateRange: { start: string, end: string }
}

interface workHistoryListProps {
  workHistoryList: [workHistoryItem]
}

const workHistoryList = (props: workHistoryListProps) => {

  return (
    <>
      {props.workHistoryList.map(
        (workHistoryItem, i) => {
          return <p key={i}>{workHistoryItem.company}</p>
        }
      )}
    </>
  )
}

export default workHistoryList
