
{
    // ******  <  Problem 4  >  *********

    type Circle = {
        shape: "circle";
        radius: number;
    };

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    };

    type Shape = Circle | Rectangle;


    function calculateShapeArea(shape: Shape): number {

        if (shape.shape === "circle") {
            const circleValue = Math.PI * shape.radius * shape.radius ;
            const result = circleValue.toFixed(2);
            return parseFloat(result)
        } 

        else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }

        return 0;
    }

    // Input 1
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // const circleArea = calculateShapeArea({ shape: "circle", radius: 8 });
    // console.log(circleArea); 

    // Input 2
    const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
    // const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 5, height: 8 });
    // console.log(rectangleArea); 


    // 
}