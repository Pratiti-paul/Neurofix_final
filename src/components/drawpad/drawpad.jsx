import React, { useRef, useState, useEffect } from 'react';
import './drawpad.css';

function DrawPad() {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [drawing, setDrawing] = useState(false);
  const [tool, setTool] = useState('pen');
  const [color, setColor] = useState('#000000');

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.lineJoin = 'round';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    setCtx(context);
  }, []);

  useEffect(() => {
    if (!ctx) return;
    if (tool === 'pen') {
      ctx.strokeStyle = color;
      ctx.lineWidth = 4;
    } else if (tool === 'pencil') {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
    } else if (tool === 'eraser') {
      ctx.strokeStyle = '#f8f8f8'; // same as canvas background
      ctx.lineWidth = 12;
    }
  }, [tool, color, ctx]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!drawing) return;
    const { offsetX, offsetY } = nativeEvent;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    ctx.closePath();
    setDrawing(false);
  };

  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <div className="drawpad-container">
      <h2 className="drawpad-heading">Draw Pad</h2>

      <div className="drawpad-controls">
        <label>
          Tool:
          <select
            value={tool}
            onChange={(e) => setTool(e.target.value)}
            className="drawpad-select"
          >
            <option value="pen">Pen</option>
            <option value="pencil">Pencil</option>
            <option value="eraser">Eraser</option>
          </select>
        </label>

        {(tool === 'pen' || tool === 'pencil') && (
          <label>
            Color:
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="drawpad-color"
            />
          </label>
        )}

        <button className="drawpad-clear" onClick={clearCanvas}>Clear</button>
      </div>

      <canvas
        ref={canvasRef}
        className="drawpad-canvas"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      ></canvas>
    </div>
  );
}

export default DrawPad;
