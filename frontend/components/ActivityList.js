import styled from "styled-components";
import {translateActivity} from "../fixtures/translateActivity";

const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ActivityItem = styled.div`
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ActivityText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

export const ActivityList = (props) => {
  return (
    <ActivityContainer>
      {props.activities.length > 0 &&
        props.activities.map((activity, index) => (
          <ActivityItem key={index}>
            <ActivityText>{translateActivity(activity)}</ActivityText>
          </ActivityItem>
        ))}
    </ActivityContainer>
  );
}
