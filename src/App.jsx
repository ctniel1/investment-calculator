import { useState } from "react"
import Results from "./components/Results"
import Header from "./components/Header"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: newValue,
      }
    })
  }

  const isInputValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {isInputValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">
          Please enter a duration greater than 0.
        </p>
      )}
    </>
  )
}

export default App
