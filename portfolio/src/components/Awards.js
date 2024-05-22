import React from 'react';

const Awards = () => {
  return (
    <section id="awards" className="p-8 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Awards</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Winner, HackUMass XI - Awarded 1st prize of $3000+ for MinervAI; 600+ Competitors</li>
          <li>Top 1% in the world, LeetCode Elo - Rank: 5, Competitive Programmer in Pakistan (Codeforces)</li>
          <li>Top 20%, ACM-ICPC Regionals - Represented Amherst College in competitive programming; 60000+ participants</li>
          <li>Rank 1, Cambridge AS Levels in State; 20,000+ students</li>
        </ul>
      </div>
    </section>
  );
};

export default Awards;
