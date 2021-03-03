import { useContext } from "react"
import { MilestonesContext } from "../context/MilestonesContext"
import apiHandlers from "../services/api.handlers"

export const Tabs = () => {
  const { getSkills } = apiHandlers()
  const { sectionName } = useContext(MilestonesContext)
  function getSkill(area) {
    getSkills(area)
  }
  function isSelected(area) {
    return sectionName === area ? "active" : "";
  }
  return (
    <section className="tabs__container">
      <h2 className="header-text">Areas</h2>
      <div id="tabs">
        <button className={"left-tab " + isSelected("physical")} onClick={() => getSkill("physical")}>Physical</button>
        <button className={"right-tab " + isSelected("social")} onClick={() => getSkill("social")}>Social &amp; emotional</button>
      </div>
      <hr className="divider" />
    </section>
  )
}