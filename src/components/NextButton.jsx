import { useContext } from "react";
import { MilestonesContext } from "../context/MilestonesContext";
import apiHandlers from "../services/api.handlers";
import { Button } from "../ui";
const NextButton = () => {
  const { skillsMilestones, sectionName } = useContext(MilestonesContext)
  const { getSkills } = apiHandlers()
  function fetchOtherSection() {
    const SECTION = sectionName === "physical" ? "social" : "physical"
    getSkills(SECTION)
  }
  function completedTasks() {
    const isCompleted = (el) => el["status"] === "completed";
    const sectionCompleted = (section) => skillsMilestones[section]["list"].every(isCompleted)
    return sectionCompleted("physical") && sectionCompleted("social")
  }
  const buttonText = completedTasks() ? "Finish assessment" : "Next";
  
  return (<Button id="progress__button" onClick={fetchOtherSection}>{buttonText}</Button>)
}

export default NextButton;