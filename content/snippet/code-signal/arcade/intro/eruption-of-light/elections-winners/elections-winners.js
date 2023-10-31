function electionsWinners(votes, k) {
  let maxVote = Math.max(...votes);
  if (k === 0 && votes.filter((vote) => vote === maxVote).length === 1) {
    return 1;
  }
  return votes.filter((vote) => vote + k > maxVote).length;
}

console.log(electionsWinners([1, 1, 1, 1, 1], 1));
