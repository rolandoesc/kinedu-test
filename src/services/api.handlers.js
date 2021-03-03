import { useContext } from "react";
import { MilestonesContext } from "../context/MilestonesContext";
import { KineduServices } from "./api.services";

export default () => {
  const {
    setSkill,
    setSectionName,
    setIsFetching,
    setCurrentSkill
  } = useContext(MilestonesContext)

  async function getSkills(area = "physical") {
    try {
      setIsFetching(true)
      const { data: { data: { skill } } } = await KineduServices.skills(area);
      setSkill(skill)
      setSectionName(area)
      setCurrentSkill(area, skill)
      return true
    } catch (error) {
      return false
    } finally {
      setIsFetching(false)
    }
  }

  return {
    getSkills
  }
}
