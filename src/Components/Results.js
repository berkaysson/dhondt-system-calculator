import React from "react";
import AllocationHistory from "./AllocationHistory";
import styled from "styled-components";

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  max-width: 700px;
`

const Table = styled.table`
  margin-bottom: 2rem;
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid var(--dark-alt-color);
`;

const TableHeader = styled.th`
  font-weight: bold;
  text-align: left;
  padding: var(--padding-sl);
`;

const TableCell = styled.td`
  padding: var(--padding-sl);
  text-align: left;
`;

const PartyAbbreviation = styled.span`
  font-weight: bold;
`;

const PartyVotes = styled.span`
`;

const PartySeats = styled.span`
  font-weight: bold;
`;

function Result({ results }) {
  return (
    <ResultsWrapper>
      <h2>Results</h2>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Party</TableHeader>
            <TableHeader>Votes</TableHeader>
            <TableHeader>Seats</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {results.parties.map((party) => (
            <TableRow key={party.abb}>
              <TableCell>
                <PartyAbbreviation>{party.abb}</PartyAbbreviation>
              </TableCell>
              <TableCell>
                <PartyVotes>{party.votes} Votes</PartyVotes>
              </TableCell>
              <TableCell>
                <PartySeats>{party.seats} Seats</PartySeats>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <AllocationHistory parties={results.parties} />
    </ResultsWrapper>
  );
}

export default Result;
