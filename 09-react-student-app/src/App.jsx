import { useState } from 'react'
import StudentForm from './Components/StudentForm'
import StudentList from './Components/StudentList'

const App = () => {
  const [studentData, setStudentData] = useState([])

  const studentformdata = (data) => {
    setStudentData((prev) => [...prev, data])
  }
  return (
    <>
      <StudentForm data={studentformdata} />
      <StudentList studentData={studentData} />
    </>
  )
}

export default App