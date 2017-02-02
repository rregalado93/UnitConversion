angular.module('UnitConverter', [])
    
    .controller('UnitController', ['$scope', function($scope)
    {
        $scope.LengthUnits =[
            {
                unitName: "millimeter/s[mm]",

            },
            {
                unitName: "centimeter/s[cm]",

            },
            {
                unitName: "meter/s[m]",

            },
            {
                unitName: "kilometer/s[km]",

            },
            {
                unitName: "inch/s[in]",

            },
            {
                unitName: "foot/s[ft]",

            },
            {
                unitName: "yard/s[yd]",

            },
            {
                unitName: "mile/s[mi]",

            }
            ];
            
        $scope.LengthUnit = $scope.LengthUnits[0];
        
        $scope.LengthUnits2 =[
            {
                unitName: "millimeter/s[mm]",

            },
            {
                unitName: "centimeter/s[cm]",

            },
            {
                unitName: "meter/s[m]",

            },
            {
                unitName: "kilometer/s[km]",

            },
            {
                unitName: "inch/s[in]",

            },
            {
                unitName: "foot/s[ft]",

            },
            {
                unitName: "yard/s[yd]",

            },
            {
                unitName: "mile/s[mi]",

            }
            ];
            
        $scope.LengthUnit2 = $scope.LengthUnits2[0];
        
        $scope.lengthConverter = function(){
            $scope.lengthNum;
            
            if ($scope.LengthUnit == $scope.LengthUnits[0])
            {
                if ($scope.LengthUnit2 == $scope.LengthUnits2[0])
                {
                    return $scope.lengthNum;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[1])
                {
                    return $scope.lengthNum * 0.1;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[2])
                {
                    return $scope.lengthNum * 0.001;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[3])
                {
                    return $scope.lengthNum * 0.000001;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[4])
                {
                    return $scope.lengthNum * 0.0393701;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[5])
                {
                    return $scope.lengthNum * 0.00328084;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[6])
                {
                    return $scope.lengthNum * 0.00109361;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[7])
                {
                    return $scope.lengthNum * 0.00000062;
                }
            }
            
            if ($scope.LengthUnit == $scope.LengthUnits[1])
            {
                if ($scope.LengthUnit2 == $scope.LengthUnits2[0])
                {
                    return $scope.lengthNum * 10;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[1])
                {
                    return $scope.lengthNum;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[2])
                {
                    return $scope.lengthNum * 0.01;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[3])
                {
                    return $scope.lengthNum * 0.00001;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[4])
                {
                    return $scope.lengthNum * 0.393701;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[5])
                {
                    return $scope.lengthNum * 0.0328084;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[6])
                {
                    return $scope.lengthNum * 0.0109361;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[7])
                {
                    return $scope.lengthNum * 0.00000621;
                }
            }
            if ($scope.LengthUnit == $scope.LengthUnits[2])
            {
                if ($scope.LengthUnit2 == $scope.LengthUnits2[0])
                {
                    return $scope.lengthNum * 1000;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[1])
                {
                    return $scope.lengthNum * 100;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[2])
                {
                    return $scope.lengthNum;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[3])
                {
                    return $scope.lengthNum * 0.001;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[4])
                {
                    return $scope.lengthNum * 39.3701;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[5])
                {
                    return $scope.lengthNum * 3.28084;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[6])
                {
                    return $scope.lengthNum * 1.09361;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[7])
                {
                    return $scope.lengthNum * 0.000621371;
                }
            }
            if ($scope.LengthUnit == $scope.LengthUnits[3])
            {
                if ($scope.LengthUnit2 == $scope.LengthUnits2[0])
                {
                    return $scope.lengthNum * 1000000;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[1])
                {
                    return $scope.lengthNum * 100000;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[2])
                {
                    return $scope.lengthNum * 1000;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[3])
                {
                    return $scope.lengthNum;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[4])
                {
                    return $scope.lengthNum * 39370.1;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[5])
                {
                    return $scope.lengthNum * 3280.84;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[6])
                {
                    return $scope.lengthNum * 1093.61;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[7])
                {
                    return $scope.lengthNum * 0.621371;
                }
                
            }
            if ($scope.LengthUnit == $scope.LengthUnits[4])
            {
                if ($scope.LengthUnit2 == $scope.LengthUnits2[0])
                {
                    return $scope.lengthNum * 25.4;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[1])
                {
                    return $scope.lengthNum * 2.54;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[2])
                {
                    return $scope.lengthNum * 0.0254;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[3])
                {
                    return $scope.lengthNum * 2.54e-5;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[4])
                {
                    return $scope.lengthNum;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[5])
                {
                    return $scope.lengthNum * 0.0833333;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[6])
                {
                    return $scope.lengthNum * 0.0277778;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[7])
                {
                    return $scope.lengthNum * 1.57828e-5;
                }
                
            }
            if ($scope.LengthUnit == $scope.LengthUnits[5])
            {
                if ($scope.LengthUnit2 == $scope.LengthUnits2[0])
                {
                    return $scope.lengthNum * 304.8;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[1])
                {
                    return $scope.lengthNum * 30.48;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[2])
                {
                    return $scope.lengthNum * 0.3048;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[3])
                {
                    return $scope.lengthNum * 0.0003048;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[4])
                {
                    return $scope.lengthNum * 12;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[5])
                {
                    return $scope.lengthNum;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[6])
                {
                    return $scope.lengthNum * 0.333333;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[7])
                {
                    return $scope.lengthNum * 0.000189394;
                }
                
            }
            if ($scope.LengthUnit == $scope.LengthUnits[6])
            {
                if ($scope.LengthUnit2 == $scope.LengthUnits2[0])
                {
                    return $scope.lengthNum * 914.4;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[1])
                {
                    return $scope.lengthNum * 91.44;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[2])
                {
                    return $scope.lengthNum * 0.9144;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[3])
                {
                    return $scope.lengthNum * 0.0009144;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[4])
                {
                    return $scope.lengthNum * 36;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[5])
                {
                    return $scope.lengthNum * 3;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[6])
                {
                    return $scope.lengthNum;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[7])
                {
                    return $scope.lengthNum * 0.000568182;
                }
                
            }
            if ($scope.LengthUnit == $scope.LengthUnits[7])
            {
                if ($scope.LengthUnit2 == $scope.LengthUnits2[0])
                {
                    return $scope.lengthNum * 1.609e+6;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[1])
                {
                    return $scope.lengthNum * 160934;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[2])
                {
                    return $scope.lengthNum * 1609.34;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[3])
                {
                    return $scope.lengthNum * 1.60934;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[4])
                {
                    return $scope.lengthNum * 63360;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[5])
                {
                    return $scope.lengthNum * 5280;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[6])
                {
                    return $scope.lengthNum * 1760;
                }
                if ($scope.LengthUnit2 == $scope.LengthUnits2[7])
                {
                    return $scope.lengthNum;
                }
                
            }
        };
        
        $scope.WeightUnits = [
            {
                unitName: "milligram/s[mg]"
            },
            {
                unitName: "gram/s[g]"
            },
            {
                unitName: "kilogram/s[kg] "
            },
            {
                unitName: "ton/s[t] "
            },
            {
                unitName: "ounce/s[oz]"
            },
            {
                unitName: "pound/s[lb]"
            },
            {
                unitName: "stone/s[s]"
            },
            {
                unitName: "US ton/s[US t]"
            }
            ];
            
        $scope.WeightUnit = $scope.WeightUnits[0];
        
        $scope.WeightUnits2 = [
            {
                unitName: "milligram/s[mg]"
            },
            {
                unitName: "gram/s[g]"
            },
            {
                unitName: "kilogram/s[kg] "
            },
            {
                unitName: "ton/s[t] "
            },
            {
                unitName: "ounce/s[oz]"
            },
            {
                unitName: "pound/s[lb]"
            },
            {
                unitName: "stone/s[s]"
            },
            {
                unitName: "US ton/s[US t]"
            }
            ];
            
        $scope.WeightUnit2 = $scope.WeightUnits2[0];
        $scope.weightConverter = function() {
            $scope.weightNum;
            
            if ($scope.WeightUnit == $scope.WeightUnits[0])
            {
                if($scope.WeightUnit2 == $scope.WeightUnits2[0])
                {
                    return $scope.weightNum;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[1])
                {
                    return $scope.weightNum * 0.001;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[2])
                {
                    return $scope.weightNum * 1e-6;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[3])
                {
                    return $scope.weightNum * 1e-9;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[4])
                {
                    return $scope.weightNum * 3.5274e-5;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[5])
                {
                    return $scope.weightNum * 2.20462e-6;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[6])
                {
                    return $scope.weightNum * 1.57473e-7;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[7])
                {
                    return $scope.weightNum * 1.10231e-9;
                }
            }
            if ($scope.WeightUnit == $scope.WeightUnits[1])
            {
                if($scope.WeightUnit2 == $scope.WeightUnits2[0])
                {
                    return $scope.weightNum * 1000;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[1])
                {
                    return $scope.weightNum;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[2])
                {
                    return $scope.weightNum * 0.001;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[3])
                {
                    return $scope.weightNum * 1e-6;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[4])
                {
                    return $scope.weightNum * 0.035274;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[5])
                {
                    return $scope.weightNum * 0.00220462;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[6])
                {
                    return $scope.weightNum * 0.000157473;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[7])
                {
                    return $scope.weightNum * 1.10231e-6;
                }
            }
            if ($scope.WeightUnit == $scope.WeightUnits[2])
            {
                if($scope.WeightUnit2 == $scope.WeightUnits2[0])
                {
                    return $scope.weightNum * 1000000;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[1])
                {
                    return $scope.weightNum * 1000;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[2])
                {
                    return $scope.weightNum;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[3])
                {
                    return $scope.weightNum * 0.001;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[4])
                {
                    return $scope.weightNum * 35.274;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[5])
                {
                    return $scope.weightNum * 2.20462;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[6])
                {
                    return $scope.weightNum * 0.157473;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[7])
                {
                    return $scope.weightNum * 0.00110231;
                }
            }
            if ($scope.WeightUnit == $scope.WeightUnits[3])
            {
                if($scope.WeightUnit2 == $scope.WeightUnits2[0])
                {
                    return $scope.weightNum * 1e+9;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[1])
                {
                    return $scope.weightNum * 1000000;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[2])
                {
                    return $scope.weightNum * 1000;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[3])
                {
                    return $scope.weightNum;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[4])
                {
                    return $scope.weightNum * 35274;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[5])
                {
                    return $scope.weightNum * 2204.62;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[6])
                {
                    return $scope.weightNum * 157.473;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[7])
                {
                    return $scope.weightNum * 1.10231;
                }
            }
            if ($scope.WeightUnit == $scope.WeightUnits[4])
            {
                if($scope.WeightUnit2 == $scope.WeightUnits2[0])
                {
                    return $scope.weightNum * 28349.5;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[1])
                {
                    return $scope.weightNum * 28.3495;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[2])
                {
                    return $scope.weightNum * 0.0283495;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[3])
                {
                    return $scope.weightNum * 2.83495e-5;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[4])
                {
                    return $scope.weightNum;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[5])
                {
                    return $scope.weightNum * 0.0625;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[6])
                {
                    return $scope.weightNum * 0.00446429;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[7])
                {
                    return $scope.weightNum * 3.125e-5;
                }
            }
            if ($scope.WeightUnit == $scope.WeightUnits[5])
            {
                if($scope.WeightUnit2 == $scope.WeightUnits2[0])
                {
                    return $scope.weightNum * 453592;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[1])
                {
                    return $scope.weightNum * 453.592;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[2])
                {
                    return $scope.weightNum * 0.453592;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[3])
                {
                    return $scope.weightNum * 0.000453592;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[4])
                {
                    return $scope.weightNum * 16;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[5])
                {
                    return $scope.weightNum;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[6])
                {
                    return $scope.weightNum * 0.0714286;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[7])
                {
                    return $scope.weightNum * 0.0005;
                }
            }
            if ($scope.WeightUnit == $scope.WeightUnits[6])
            {
                if($scope.WeightUnit2 == $scope.WeightUnits2[0])
                {
                    return $scope.weightNum * 6.35e+6;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[1])
                {
                    return $scope.weightNum * 6350.29;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[2])
                {
                    return $scope.weightNum * 6.35029;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[3])
                {
                    return $scope.weightNum * 0.00635029;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[4])
                {
                    return $scope.weightNum * 224;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[5])
                {
                    return $scope.weightNum * 14;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[6])
                {
                    return $scope.weightNum;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[7])
                {
                    return $scope.weightNum * 0.007;
                }
            }
            if ($scope.WeightUnit == $scope.WeightUnits[7])
            {
                if($scope.WeightUnit2 == $scope.WeightUnits2[0])
                {
                    return $scope.weightNum * 9.072e+8;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[1])
                {
                    return $scope.weightNum * 907185;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[2])
                {
                    return $scope.weightNum * 907.185;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[3])
                {
                    return $scope.weightNum * 0.907185;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[4])
                {
                    return $scope.weightNum * 32000;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[5])
                {
                    return $scope.weightNum * 2000;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[6])
                {
                    return $scope.weightNum * 142.857;
                }
                if($scope.WeightUnit2 == $scope.WeightUnits2[7])
                {
                    return $scope.weightNum;
                }
            }
            
        };
        
        $scope.AreaUnits =[
            {
                unitName: "square millimeter/s[mm]",

            },
            {
                unitName: "square centimeter/s[cm]",

            },
            {
                unitName: "square meter/s[m]",

            },
            {
                unitName: "square kilometer/s[km]",

            },
            {
                unitName: "square inch/s[in]",

            },
            {
                unitName: "square foot/s[ft]",

            },
            {
                unitName: "square yard/s[yd]",

            },
            {
                unitName: "square mile/s[mi]",

            }
            ];
            
        $scope.AreaUnit = $scope.AreaUnits[0];
        
        $scope.AreaUnits2 =[
            {
                unitName: "square millimeter/s[mm]",

            },
            {
                unitName: "square centimeter/s[cm]",

            },
            {
                unitName: "square meter/s[m]",

            },
            {
                unitName: "square kilometer/s[km]",

            },
            {
                unitName: "square inch/s[in]",

            },
            {
                unitName: "square foot/s[ft]",

            },
            {
                unitName: "square yard/s[yd]",

            },
            {
                unitName: "square mile/s[mi]",

            }
            ];
            
        $scope.AreaUnit2 = $scope.AreaUnits2[0];
        
        $scope.areaConverter = function(){
          $scope.areaNum;
          
          if($scope.AreaUnit == $scope.AreaUnits[0])
          {
              if($scope.AreaUnit2 == $scope.AreaUnits2[0]) 
              {
                  return $scope.areaNum;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[1]) 
              {
                  return $scope.areaNum * 0.01;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[2]) 
              {
                  return $scope.areaNum * 1e-6;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[3]) 
              {
                  return $scope.areaNum * 1e-12;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[4]) 
              {
                  return $scope.areaNum * 0.00155;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[5]) 
              {
                  return $scope.areaNum * 1.07639e-5;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[6]) 
              {
                  return $scope.areaNum * 1.19599e-6;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[7]) 
              {
                  return $scope.areaNum * 3.86102e-13;
              }
          }
          if($scope.AreaUnit == $scope.AreaUnits[1])
          {
              if($scope.AreaUnit2 == $scope.AreaUnits2[0]) 
              {
                  return $scope.areaNum * 100;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[1]) 
              {
                  return $scope.areaNum;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[2]) 
              {
                  return $scope.areaNum * 0.0001;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[3]) 
              {
                  return $scope.areaNum * 1e-10;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[4]) 
              {
                  return $scope.areaNum * 0.155;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[5]) 
              {
                  return $scope.areaNum * 0.00107639;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[6]) 
              {
                  return $scope.areaNum * 0.000119599;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[7]) 
              {
                  return $scope.areaNum * 3.86102e-11;
              }
          }
          if($scope.AreaUnit == $scope.AreaUnits[2])
          {
              if($scope.AreaUnit2 == $scope.AreaUnits2[0]) 
              {
                  return $scope.areaNum * 1000000;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[1]) 
              {
                  return $scope.areaNum * 10000;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[2]) 
              {
                  return $scope.areaNum;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[3]) 
              {
                  return $scope.areaNum * 1e-6;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[4]) 
              {
                  return $scope.areaNum * 1550;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[5]) 
              {
                  return $scope.areaNum * 10.7639;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[6]) 
              {
                  return $scope.areaNum * 1.19599;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[7]) 
              {
                  return $scope.areaNum * 3.86102e-7;
              }
          }
          if($scope.AreaUnit == $scope.AreaUnits[3])
          {
              if($scope.AreaUnit2 == $scope.AreaUnits2[0]) 
              {
                  return $scope.areaNum * 1e+12;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[1]) 
              {
                  return $scope.areaNum * 1e+10;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[2]) 
              {
                  return $scope.areaNum * 1000000;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[3]) 
              {
                  return $scope.areaNum;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[4]) 
              {
                  return $scope.areaNum * 1.55e+9;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[5]) 
              {
                  return $scope.areaNum * 1.076e+7;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[6]) 
              {
                  return $scope.areaNum * 1.196e+6;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[7]) 
              {
                  return $scope.areaNum * 0.386102;
              }
          }
          if($scope.AreaUnit == $scope.AreaUnits[4])
          {
              if($scope.AreaUnit2 == $scope.AreaUnits2[0]) 
              {
                  return $scope.areaNum * 645.16;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[1]) 
              {
                  return $scope.areaNum * 6.4516;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[2]) 
              {
                  return $scope.areaNum * 0.00064516;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[3]) 
              {
                  return $scope.areaNum * 6.4516e-10;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[4]) 
              {
                  return $scope.areaNum;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[5]) 
              {
                  return $scope.areaNum * 0.00694444;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[6]) 
              {
                  return $scope.areaNum * 0.000771605;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[7]) 
              {
                  return $scope.areaNum * 2.49098e-10;
              }
          }
          if($scope.AreaUnit == $scope.AreaUnits[5])
          {
              if($scope.AreaUnit2 == $scope.AreaUnits2[0]) 
              {
                  return $scope.areaNum * 92903;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[1]) 
              {
                  return $scope.areaNum * 929.03;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[2]) 
              {
                  return $scope.areaNum * 0.092903;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[3]) 
              {
                  return $scope.areaNum * 9.2903e-8;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[4]) 
              {
                  return $scope.areaNum * 144;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[5]) 
              {
                  return $scope.areaNum;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[6]) 
              {
                  return $scope.areaNum * 0.111111;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[7]) 
              {
                  return $scope.areaNum * 3.58701e-8;
              }
          }
          if($scope.AreaUnit == $scope.AreaUnits[6])
          {
              if($scope.AreaUnit2 == $scope.AreaUnits2[0]) 
              {
                  return $scope.areaNum * 836127;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[1]) 
              {
                  return $scope.areaNum * 8361.27;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[2]) 
              {
                  return $scope.areaNum * 0.836127;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[3]) 
              {
                  return $scope.areaNum * 8.36127e-7;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[4]) 
              {
                  return $scope.areaNum * 1296;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[5]) 
              {
                  return $scope.areaNum * 9;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[6]) 
              {
                  return $scope.areaNum;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[7]) 
              {
                  return $scope.areaNum * 3.22831e-7;
              }
          }
          if($scope.AreaUnit == $scope.AreaUnits[7])
          {
              if($scope.AreaUnit2 == $scope.AreaUnits2[0]) 
              {
                  return $scope.areaNum * 2.59e+12;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[1]) 
              {
                  return $scope.areaNum * 2.59e+10;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[2]) 
              {
                  return $scope.areaNum * 2.59e+6;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[3]) 
              {
                  return $scope.areaNum * 2.58999;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[4]) 
              {
                  return $scope.areaNum * 4.014e+9;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[5]) 
              {
                  return $scope.areaNum * 2.788e+7;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[6]) 
              {
                  return $scope.areaNum * 3.098e+6;
              }
              if($scope.AreaUnit2 == $scope.AreaUnits2[7]) 
              {
                  return $scope.areaNum;
              }
          }
          
        };
        
        $scope.VolumeUnits = [
            {
                unitName: "cubic centimeter/s[cm3]"
            },
            {
                unitName: "cubic metre/s[m3]"
            },
            {
                unitName: "litre/s[l]"
            },
            {
                unitName: "cubic inch/s[in3]"
            },
            {
                unitName: "cubic feet [ft3]"
            },
            {
                unitName: "fluid ounce/s[fl oz]"
            },
            {
                unitName: "gallon/s [gal]"
            },
            {
                unitName: "US gallon/s [US gal]"
            },
            ];
            
        $scope.VolumeUnit = $scope.VolumeUnits[0];
        
        $scope.VolumeUnits2 = [
            {
                unitName: "cubic centimeter/s[cm3]"
            },
            {
                unitName: "cubic metre/s[m3]"
            },
            {
                unitName: "litre/s[l]"
            },
            {
                unitName: "cubic inch/s[in3]"
            },
            {
                unitName: "cubic feet [ft3]"
            },
            {
                unitName: "fluid ounce/s[fl oz]"
            },
            {
                unitName: "gallon/s [gal]"
            },
            {
                unitName: "US gallon/s [US gal]"
            },
            ];
            
        $scope.VolumeUnit2 = $scope.VolumeUnits2[0];
        
        $scope.volumeConverter = function(){
          $scope.volumeNum;
          
          if($scope.VolumeUnit == $scope.VolumeUnits[0])
          {
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[0])
              {
                  return $scope.volumeNum;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[1])
              {
                  return $scope.volumeNum * 1e-6;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[2])
              {
                  return $scope.volumeNum * 0.001;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[3])
              {
                  return $scope.volumeNum * 0.0610237;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[4])
              {
                  return $scope.volumeNum * 3.53147e-5;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[5])
              {
                  return $scope.volumeNum * 0.033814;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[6])
              {
                  return $scope.volumeNum * 0.000219969;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[7])
              {
                  return $scope.volumeNum * 0.000264172;
              }
          }
          if($scope.VolumeUnit == $scope.VolumeUnits[1])
          {
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[0])
              {
                  return $scope.volumeNum * 1000000;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[1])
              {
                  return $scope.volumeNum;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[2])
              {
                  return $scope.volumeNum * 1000;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[3])
              {
                  return $scope.volumeNum * 61023.7;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[4])
              {
                  return $scope.volumeNum * 35.3147;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[5])
              {
                  return $scope.volumeNum * 33814;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[6])
              {
                  return $scope.volumeNum * 219.969;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[7])
              {
                  return $scope.volumeNum * 264.172;
              }
          }
          if($scope.VolumeUnit == $scope.VolumeUnits[2])
          {
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[0])
              {
                  return $scope.volumeNum * 1000;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[1])
              {
                  return $scope.volumeNum * 0.001;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[2])
              {
                  return $scope.volumeNum;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[3])
              {
                  return $scope.volumeNum * 61.0237;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[4])
              {
                  return $scope.volumeNum * 0.0353147;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[5])
              {
                  return $scope.volumeNum * 33.814;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[6])
              {
                  return $scope.volumeNum * 0.219969;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[7])
              {
                  return $scope.volumeNum * 0.264172;
              }
          }
          if($scope.VolumeUnit == $scope.VolumeUnits[3])
          {
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[0])
              {
                  return $scope.volumeNum * 16.3871;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[1])
              {
                  return $scope.volumeNum * 1.63871e-5;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[2])
              {
                  return $scope.volumeNum * 0.0163871;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[3])
              {
                  return $scope.volumeNum;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[4])
              {
                  return $scope.volumeNum * 0.000578704;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[5])
              {
                  return $scope.volumeNum * 0.554113;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[6])
              {
                  return $scope.volumeNum * 0.0036046465453;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[7])
              {
                  return $scope.volumeNum * 0.004329;
              }
          }
          if($scope.VolumeUnit == $scope.VolumeUnits[4])
          {
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[0])
              {
                  return $scope.volumeNum * 28316.8;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[1])
              {
                  return $scope.volumeNum * 0.0283168;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[2])
              {
                  return $scope.volumeNum * 28.3168;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[3])
              {
                  return $scope.volumeNum * 1728;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[4])
              {
                  return $scope.volumeNum;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[5])
              {
                  return $scope.volumeNum * 957.506;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[6])
              {
                  return $scope.volumeNum * 6.22884;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[7])
              {
                  return $scope.volumeNum * 7.48052;
              }
          }
          if($scope.VolumeUnit == $scope.VolumeUnits[5])
          {
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[0])
              {
                  return $scope.volumeNum * 29.5735;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[1])
              {
                  return $scope.volumeNum * 2.95735e-5;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[2])
              {
                  return $scope.volumeNum * 0.0295735;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[3])
              {
                  return $scope.volumeNum * 1.80469;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[4])
              {
                  return $scope.volumeNum * 0.00104438;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[5])
              {
                  return $scope.volumeNum;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[6])
              {
                  return $scope.volumeNum * 0.00650527;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[7])
              {
                  return $scope.volumeNum * 0.0078125;
              }
          }
          if($scope.VolumeUnit == $scope.VolumeUnits[6])
          {
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[0])
              {
                  return $scope.volumeNum * 4546.09;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[1])
              {
                  return $scope.volumeNum * 0.00454609;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[2])
              {
                  return $scope.volumeNum * 4.54609;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[3])
              {
                  return $scope.volumeNum * 277.419;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[4])
              {
                  return $scope.volumeNum * 0.160544;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[5])
              {
                  return $scope.volumeNum * 153.722;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[6])
              {
                  return $scope.volumeNum;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[7])
              {
                  return $scope.volumeNum * 1.20095;
              }
          }
          if($scope.VolumeUnit == $scope.VolumeUnits[7])
          {
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[0])
              {
                  return $scope.volumeNum * 3785.41;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[1])
              {
                  return $scope.volumeNum * 0.00378541;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[2])
              {
                  return $scope.volumeNum * 3.78541;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[3])
              {
                  return $scope.volumeNum * 231;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[4])
              {
                  return $scope.volumeNum * 0.133681;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[5])
              {
                  return $scope.volumeNum * 128;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[6])
              {
                  return $scope.volumeNum * 0.832674;
              }
              if($scope.VolumeUnit2 == $scope.VolumeUnits2[7])
              {
                  return $scope.volumeNum;
              }
          }
            
        };
            
        $scope.clearLength = function(){
            $scope.lengthNum = '';
        };
        
        $scope.clearWeight = function(){
            $scope.weightNum = '';
        };
        
        $scope.clearArea = function(){
            $scope.areaNum = '';
        };
        
        $scope.clearVolume = function(){
            $scope.volumeNum = '';
        };

        
            
    }]);
    
