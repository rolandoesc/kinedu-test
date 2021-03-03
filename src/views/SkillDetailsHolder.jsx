import { useContext, useEffect, useState } from "react"
import MilestoneList from "../components/MilestonesList"
import NextButton from "../components/NextButton"
import SkillDescription from "../components/SkillDescription"
import { Tabs } from "../components/Tabs"
import { MilestonesContext } from "../context/MilestonesContext"
import APIHandlers from "../services/api.handlers"
import { GlobalLayout } from "./GlobalLayout"
import LoadingView from "./LoadingView"

const SkillDetailsHolder = () => {
  const { skill, isFetching } = useContext(MilestonesContext);
  const { getSkills } = APIHandlers()
  useEffect(async () => {
    await getSkills()
  }, [])
  const renderView = isFetching ? <LoadingView/> : <div className="fade-in">
    <SkillDescription skill={skill}/>
    <MilestoneList milestones={skill["milestones"]} />
    <NextButton />
  </div>
  return (

    <GlobalLayout>
      {renderView}
    </GlobalLayout>

  )
}

export default SkillDetailsHolder;