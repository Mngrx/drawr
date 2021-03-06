import { Point } from './point';
import { Shape } from './shape'

/**
 * Rectangle shape. It is defined by the coordinates of its top-left corner and its size (width and height).
 */
export class Rect implements Shape {
  top: number;
  left: number;
  width: number;
  height: number;

  readonly type = 'rect';

  /**
   * Create a new rectangle with a unique id.
   * @param id the shape identiifier (unique)
   */
  constructor(public readonly id: string) {
    this.top = 10;
    this.left = 10;
    this.width = 10;
    this.height = 10;
  }

  /**
   * Draw itself in a canvas.
   * @param ctx HTML canvas 2D graphic context where the rectangle will be drawn.
   */
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillRect(this.left, this.top, this.width, this.height);
  }
}