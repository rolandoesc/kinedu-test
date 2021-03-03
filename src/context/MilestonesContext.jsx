import React, { useState, createContext } from "react";
export const MilestonesContext = createContext(null);

export default ({ children }) => {
  const [skill, setSkill] = useState({})
  const [skillsMilestones, setSkillsMilestones] = useState({
    physical: {
      hasFetched: false,
      list: []
    },
    social: {
      hasFetched: false,
      list: []
    },
  })
  const [sectionName, setSectionName] = useState("physical")
  const [isFetching, setIsFetching] = useState(false)
  const BACKGROUND_COLORS = {
    "physical": "var(--physical-color)",
    "social": "var(--social-color)"
  }

  const statuses = {
    "not-answered": "uncompleted",
    "uncompleted": "completed",
    "completed": "uncompleted"
  }

  function toggleMilestoneStatus(milestone) {
    milestone["status"] = statuses[milestone["status"]]
    const INDEX = skillsMilestones[sectionName]["list"].findIndex(m => m["id"] === milestone["id"])

    const skillsCopy = { ...skillsMilestones }
    skillsCopy[sectionName]["list"][INDEX] = milestone

    setSkillsMilestones(skillsCopy)

  }



  function listMilestonesStatuses(list) {
    return list.map(m => {
      const milestone = {
        id: m["id"],
        status: "not-answered"
      }
      return milestone
    })
  }

  function setCurrentSkill(area, data) {
    function setVariable(area, data) {
      const newState = { ...skillsMilestones }
      newState[area]["hasFetched"] = true
      newState[area]["list"] = listMilestonesStatuses(data["milestones"])
      return newState
    }
    if (!skillsMilestones[area]["hasFetched"])
      setSkillsMilestones(setVariable(area, data))
  }
  const store = {
    skill,
    setSkill,
    sectionName,
    setSectionName,
    isFetching,
    setIsFetching,
    setCurrentSkill,
    skillsMilestones,
    toggleMilestoneStatus,
    BACKGROUND_COLORS
  }
  return (
    <MilestonesContext.Provider value={store}>
      {children}
    </MilestonesContext.Provider>
  )
}