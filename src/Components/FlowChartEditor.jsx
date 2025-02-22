import React, { useState, useCallback } from "react";
import ReactFlow, { addEdge, Background, Controls, MiniMap } from "react-flow-renderer";
import { useNodesState } from "../store/useStore";

const initialNodes = [
  { id: "1", type: "input", data: { label: "Start" }, position: { x: 100, y: 50 } },
  { id: "2", data: { label: "Process" }, position: { x: 300, y: 150 } },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2", animated: true }];

const FlowchartEditor = () => {
  const { nodes, addNode, deleteNodes } = useNodesState();
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <div className="w-full h-[80vh] border bg-white rounded-lg shadow">
      <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowchartEditor;