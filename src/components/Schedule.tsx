import React from 'react';

export const Schedule: React.FC<{ entries: Array<any> }> = ({ entries }) => <p>{JSON.stringify(entries)}</p>;
