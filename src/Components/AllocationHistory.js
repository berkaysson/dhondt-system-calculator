import React from "react";
import styled from "styled-components";

const AllocationHistoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  padding: var(--padding);
`;

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

function AllocationHistory({ parties }) {
  const allocationHistoryContent = parties.map((party, index) => {
    if (party.allocationHistory.length !== 0) {
      return (
        <PartyHistory key={index}>
          <PartyAbbreviation>{party.abb}</PartyAbbreviation>
          <AllocationList>
            {party.allocationHistory.map((allocation, index) => (
              <AllocationItem key={index}>
                Seat <SeatNumber>{allocation.seat}</SeatNumber>
                <AllocationPercentage>
                  ({allocation.percentage})
                </AllocationPercentage>
              </AllocationItem>
            ))}
          </AllocationList>
        </PartyHistory>
      );
    }

    return null;
  });

  return <AllocationHistoryWrapper>{allocationHistoryContent}</AllocationHistoryWrapper>;
}

export default AllocationHistory;
