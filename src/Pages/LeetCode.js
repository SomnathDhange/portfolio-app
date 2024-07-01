const LeetCode = () => {
  const LeetCodeArr = [
    {
      label: "Easy",
      score: 583,
      total: 719,
      classColor: "text-green-500",
    },
    {
      label: "Medium",
      score: 1145,
      total: 1517,
      classColor: "text-orange-400",
    },
    {
      label: "Hard",
      score: 583,
      total: 631,
      classColor: "text-rose-500",
    },
  ];

  const rankingArr = [
    {
      label: "Total Saved",
      count: 2223,
    },
    {
      label: "Ranking",
      count: 2125,
    },
    {
      label: "Reputation",
      count: 151,
    },
  ];

  return (
    <>
      <div className="container m-auto py-20 sm:px-10 p-4">
        <div className="border rounded-lg p-8 border-black w-full">
          {LeetCodeArr.map((item) => {
            return (
              <div className="flex p-2.5 justify-between items-center px-3 border-black border-b-2">
                <div>{item.label}</div>
                <div>
                  <span className={`text-4xl font-bold ${item.classColor}`}>
                    {item.score}
                  </span>
                  <span className="text-xs">/{item.total}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="sm:flex gap-4 pt-8 w-full text-center sm:text-left">
          {rankingArr.map((item) => {
            return (
              <div className="mb-6 border rounded-lg p-8 border-black flex-col items-center justify-center sm:w-2/3 px-9 py-5">
                <p className="text-xl">{item.label}</p>
                <h1 className="text-5xl font-bold">{item.count}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LeetCode;
