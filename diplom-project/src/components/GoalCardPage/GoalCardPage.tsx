import { useState } from "react";
import GoalCard, { GoalCardProps } from "../../shared/ui/GoalCard/GoalCard";
import TextButton from "../../shared/ui/TextButton/TextButton";
import Title from "../../shared/ui/Title/Title";
import AddGoalCard from "../../components/Modal/AddGoalCard/AddGoalCard";
import { useDispatch } from "react-redux";
import { showAlert } from "../../store/actions";
import { AlertProps } from "antd";

function GoalCardPage() {
  const dispatch = useDispatch();
  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);

  const [goals, setGoals] = useState<GoalCardProps[]>(() => {
    const savedGoals = localStorage.getItem("bankGoals");
    return savedGoals ? JSON.parse(savedGoals) : [];
  });

  const handleGoalAddClick = () => {
    setIsGoalModalOpen(true);
  };

  const addGoals = (newGoal: GoalCardProps) => {
    const updatedGoals = [...goals, newGoal];
    setGoals(updatedGoals);
    localStorage.setItem("bankGoals", JSON.stringify(updatedGoals));
  };

  const deleteGoal = (index: number) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
    localStorage.setItem("bankGoals", JSON.stringify(updatedGoals));
    const alert = {
      message: "Успех",
      description: `Цель "${goals[index].goal}" успешно удалена!`,
      type: "info",
    } as Partial<AlertProps>;
    dispatch(showAlert(alert));
  };

  return (
    <>
      <div>
        <div className="header-info">
          <Title children={"Цели"}></Title>
          <TextButton
            children={"Добавить"}
            onClick={handleGoalAddClick}
          ></TextButton>
        </div>
        <div className="goal-cards-wrapper">
          {goals.map((cardProps, index) => (
            <div
              key={index}
              id={`card-${index + 1}`}
              style={{ position: "relative" }}
            >
              <GoalCard {...cardProps} onDelete={() => deleteGoal(index)} />
            </div>
          ))}
        </div>
      </div>
      <AddGoalCard
        isModalOpen={isGoalModalOpen}
        setIsModalOpen={setIsGoalModalOpen}
        addCard={addGoals}
        onDelete={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
}

export default GoalCardPage;
