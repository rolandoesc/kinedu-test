import { useContext } from "react"
import { MilestonesContext } from "../context/MilestonesContext"
import { Button } from "../ui"

const Milestone = ({ milestone }) => {
  const { skillsMilestones, sectionName, toggleMilestoneStatus } = useContext(MilestonesContext)
  const currentMilestone = skillsMilestones[sectionName]["list"].find(m => m["id"] === milestone["id"])
  const buttonText = {
    "not-answered": "Not answered",
    "uncompleted": "Uncompleted",
    "completed": "Completed"
  }
  return (
    <li className="milestone__container">
      <div className="milestone__info">
        <h3 className="milestone__title">{milestone["title"]}</h3>
        <p className="milestone__description">Usually achieved by: 2 - 4 months</p>
      </div>
      <Button className={"milestone-status__button " + currentMilestone["status"]} onClick={() => toggleMilestoneStatus(currentMilestone)}>
        {buttonText[currentMilestone["status"]]}
      </Button>
    </li>
  )
}

const MilestoneList = ({ milestones }) => {
  const List = () => typeof milestones !== "undefined" ? milestones.map(m => <Milestone milestone={m} key={m["id"]} />) : <></>
  return (
    <ul>
      <List/>
    </ul>
  )
}

export default MilestoneList;