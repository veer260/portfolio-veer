class Pixel {
    constructor(color, x, y, size, ctx, opacityRate, minSize = 3,maxSize = 4, sizeRate = 0.02, delay) {
        this.color = color;
         this.gridX = x;  // Original grid position
        this.gridY = y;  // Original grid position
        this.x = x;
        this.y = y;
        this.size = size;
        this.ctx = ctx;
        // this.opacity = 1;
        // this.opacityRate = opacityRate;
        this.state = "idle"; //idle, active
        this.distance = 0;
        this.isReverse = false;
        this.minSize = 0.2;
        this.maxSize = 3.8;
        this.sizeRate = sizeRate;
        this.delay = delay;
        this.counter = 0;
        this.isShimmer = false;
        this.isIdle= true;
    }

    draw() {
            // Always calculate position from grid position and current size
        const renderX = this.gridX - this.size/2;
        const renderY = this.gridY - this.size/2;
        // const newColor = this.color.slice(0, this.color.length-1) + `,${this.opacity})`;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(renderX, renderY, this.size, this.size);
        // this.ctx.fillRect(this.x + (this.gap - this.size)/2, this.y + (this.gap-this.size)/2, this.size, this.size);
    }

 
    shimmer() {

        if(this.size < this.minSize) {
        
            this.isReverse = false;
        }else if(this.size >= this.maxSize)  {
            this.isReverse = true;
        }

        if(this.isReverse) {

            this.size -= this.sizeRate;
            // this.x += this.sizeRate/2;
            // this.y += this.sizeRate/2;
        }else{
            this.size += this.sizeRate;
            
            // this.x -= this.sizeRate/2;
            // this.y -= this.sizeRate/2;
        }
        


    }


    appear() {
        if(this.counter <= this.delay ){
            this.counter += 15;
            return;
        } 
        
        this.isIdle = false;
        if(this.size < this.maxSize && !this.isReverse) {
            this.size += this.sizeRate;
            // this.x -= this.sizeRate/2;
            // this.y -= this.sizeRate/2;
        }

        if(this.size >= this.maxSize){
            this.isShimmer = true;
            this.isReverse = true;

        }

        if(this.isShimmer) {
            this.shimmer();
        }
        this.draw();
    }

    disappear() {
        if(this.isIdle || this.size <= 0) {
        this.isIdle = true;
        this.isShimmer = false;
        return;
    }
    
    // Gradual shrinking (one step per frame)
    this.size -= this.sizeRate *5; // Make it shrink faster than it grows
    this.x += (this.sizeRate*5 ) / 2; // Adjust position to keep centered
    this.y += (this.sizeRate*5 ) / 2;
    
    if(this.size <= 0) {
        this.size = 0;
        this.isIdle = true;
        this.counter = 0; // Reset for next appear cycle
        this.isShimmer = false;
        this.isReverse = false;
    }
    
    this.draw();

    }


    
}

export default Pixel;