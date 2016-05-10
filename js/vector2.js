/*=============================================
-----------------------------------
Copyright (c) 2016 Emmanuel Vaccaro
-----------------------------------
@file: vector2.js
@date: 01/04/2016
@author: Emmanuel Vaccaro
@brief: A Vector2 math library for making 2D
animations
===============================================*/

function Vector2(x, y)
{
    if (x == undefined) { x = 0; }
    if (y == undefined) { y = 0; }

    return {
        x, y,
        // Calculates dot product of a vector and returns result
        GetDotProduct: function (other)
        {
            return (x * other.x) + (y * other.y);
        },
        // Calculates length of a vector (magnitude) and returns result
        GetMagnitude: function ()
        {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        // Calculates normal of vector and returns a result vector
        GetNormal: function ()
        {
            var result = new Vector2();
            var magnitude = this.GetMagnitude();
            if (magnitude != 0) {
                result.x = this.x / magnitude;
                result.y = this.y / magnitude;
            }
            return result;
        },
        // Calculates and sets the vector's normals
        Normalize: function ()
        {
            var normalized = this.GetNormal();
            this.x = normalized.x;
            this.y = normalized.y;
            return this;
        }
    };
}

// Adds (+) two vectors together and returns result
Vector2.Add = function (vectorA, vectorB)
{
    var result = new Vector2();
    result.x = vectorA.x + vectorB.x;
    result.y = vectorA.y + vectorB.y;
    return result;
}

// Subtracts (-) a vector from another vector and returns the result
Vector2.Subtract = function (vectorA, vectorB)
{
    var result = new Vector2();
    result.x = vectorA.x - vectorB.x;
    result.y = vectorA.y - vectorB.y;
    return result;
}

// Multiplies (*) two vectors together result
Vector2.Multiply = function (vectorA, vectorB)
{
    var result = new Vector2();
    result.x = vectorA.x * vectorB.x;
    result.y = vectorA.y * vectorB.y;
    return result;
}

// Converts a vector's direction to angle (in degrees)
Vector2.ToAngle = function (direction)
{
    return Math.atan2(direction.y, direction.x);
}

AngleToRadians = function(angle)
{
    return angle * Math.PI / 180;
}

function RadianToVector2(radian)
{
return [Math.cos(radian),Math.sin(radian)];
}

AngleToVector = function(angle)
{
    return RadianToVector2(AngleToRadians(angle));
}

VectorsToAngle = function(x1,y1,x2,y2)
{
// todo vecors to angle
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}