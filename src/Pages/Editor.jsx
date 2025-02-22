import React, { useState, useCallback } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Controls,
  MiniMap,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { v4 as uuidv4 } from "uuid";

const initialNodes = [];
const initialEdges = [];

export const Editor = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);

  const addShape = (shape) => {
    const newNode = {
      id: uuidv4(),
      type: "default",
      data: { label: "Edit Text" },
      position: { x: Math.random() * 600, y: Math.random() * 400 },
      style: shapeStyles[shape],
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleTextChange = (event) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNode
          ? { ...node, data: { ...node.data, label: event.target.value } }
          : node
      )
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.toolbar}>
        {[
          "Rectangle",
          "Circle",
          "Triangle",
          "Diamond",
          "Hexagon",
          "Star",
          "Pentagon",
          "Parallelogram",
          "Trapezoid",
          "Ellipse",
        ].map((shape) => (
          <button key={shape} style={styles.button} onClick={() => addShape(shape)}>
            {shape}
          </button>
        ))}
        <button style={styles.downloadButton} onClick={() => console.log("Download Logic")}>
          Download
        </button>
      </div>
      
      {selectedNode && (
        <input
          style={styles.textInput}
          value={nodes.find((node) => node.id === selectedNode)?.data?.label || ""}
          onChange={handleTextChange}
        />
      )}

      <ReactFlowProvider>
        <div style={styles.flowContainer}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={(_, node) => setSelectedNode(node.id)}
            fitView
          >
            <MiniMap />
            <Controls />
            <Background color="#ddd" gap={20} />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    background: "#f8f9fa",
  },
  toolbar: {
    position: "absolute",
    zIndex: 10,
    top: 10,
    left: 10,
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    padding: "10px",
    background: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  button: {
    padding: "6px 10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  downloadButton: {
    padding: "6px 10px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  textInput: {
    position: "absolute",
    top: 50,
    left: 10,
    zIndex: 10,
    padding: "6px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  flowContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
};

const shapeStyles = {
  Rectangle: { width: 120, height: 60, background: "#ff6f61", borderRadius: "5px" },
  Circle: { width: 60, height: 60, borderRadius: "50%", background: "#20c997" },
  Triangle: {
    width: 0,
    height: 0,
    borderLeft: "40px solid transparent",
    borderRight: "40px solid transparent",
    borderBottom: "80px solid #ff9f1c",
  },
  Diamond: { width: 70, height: 70, transform: "rotate(45deg)", background: "#1e3799" },
  Hexagon: {
    width: 100,
    height: 50,
    background: "#ffdd57",
    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
  },
  Star: {
    width: 0,
    height: 0,
    borderLeft: "40px solid transparent",
    borderRight: "40px solid transparent",
    borderBottom: "70px solid #a29bfe",
  },
  Pentagon: {
    width: 70,
    height: 70,
    background: "#e84393",
    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
  },
  Parallelogram: { width: 120, height: 60, background: "#10ac84", transform: "skew(20deg)" },
  Trapezoid: {
    width: 120,
    height: 60,
    background: "#f368e0",
    clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
  },
  Ellipse: { width: 120, height: 60, background: "#2e86de", borderRadius: "50%" },
};

