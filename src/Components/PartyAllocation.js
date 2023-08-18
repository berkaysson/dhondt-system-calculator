import { useEffect, useState } from "react";
import styled from "styled-components";

const PartyHistory = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--dark-alt-color);
  padding: var(--padding);
  border: 2px solid var(--light-alt-color);
  outline: 0;
  box-sizing: border-box;
`;

const PartyAbbreviation = styled.h3`
  margin-bottom: var(--margin);
`;

const AllocationList = styled.ul`
  margin: 0;
  padding: 0;
`;

const AllocationItem = styled.li`
  margin-bottom: var(--margin);
`;

const SeatNumber = styled.span`
  font-weight: bold;
`;

const AllocationPercentage = styled.span`
  margin-left: var(--margin);
`;

const SeatName = styled.div`
  font-size: var(--font-sl);
  color: var(--light-alt-color);

  & > a {
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
      text-decoration: none;
    }
  }
`;

const PartyAllocation = ({ party, district }) => {
  const [seatNameList, setSeatNameList] = useState([]);
  useEffect(() => {
    if (district != null) setSeatNameList(district.parties[party.abb]);
    else {
      setSeatNameList([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [district]);
  return (
    <PartyHistory>
      <PartyAbbreviation>{party.abb}</PartyAbbreviation>
      <AllocationList>
        {party.allocationHistory.map((allocation, index) => (
          <AllocationItem key={index}>
            <SeatNumber>{allocation.seat}. Yerleşim</SeatNumber>
            <AllocationPercentage>
              ({allocation.percentage})
            </AllocationPercentage>
            <SeatName>
              {console.log(seatNameList, index, district)}
              <a
                href={`https://www.google.com/search?q=${seatNameList[index]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {seatNameList[index]}
              </a>
            </SeatName>
          </AllocationItem>
        ))}
      </AllocationList>
    </PartyHistory>
  );
};

export default PartyAllocation;
