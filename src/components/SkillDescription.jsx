import { useContext } from "react"
import { MilestonesContext } from "../context/MilestonesContext"
import { Tabs } from "./Tabs"

const SkillDescription = ({ skill }) => {
  const { BACKGROUND_COLORS, sectionName } = useContext(MilestonesContext)
  const currentBackground = { backgroundColor: BACKGROUND_COLORS[sectionName] }
  return (
    <section className="pb-4 pt-2" style={currentBackground}>
      <Tabs />
      <h1 className="text-xl text-center font-bold text-white">Skill: {skill["title"]}</h1>
      <p className="text-center text-white w-4/5 mx-auto">
        {skill['description']}
      </p>
    </section>

  )
}

export default SkillDescription;