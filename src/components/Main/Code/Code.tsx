import React from 'react';
import './Code.scss';

function Code() {
  return (
    <section className="section-broad" id="code">
      <h2 className="subtitle">code</h2>
      <div className="decoration decoration_color_dark-grey" />
      <pre className="code">
        {`n = int(input())\n`}
        {`matrix = [[int(item) for item in input().split()] for _ in range(n)]\n`}
        {`s = set(range(1, n+1))\n`}
        {`\n`}
        {`for i in matrix:\n`}
        {`    if s != set(i):\n`}
        {`        print("NO")\n`}
        {`        exit()`}
        {`\n`}
        {`matrix = [[matrix[j][i] for j in range(n)] for i in range(n)]\n`}
        {`\n`}
        {`for i in matrix:\n`}
        {`    if s != set(i):\n`}
        {`        print("NO")\n`}
        {`        exit()`}
        {`else:\n`}
        {`    print("YES")`}
      </pre>
    </section>
  );
}

export default Code;
