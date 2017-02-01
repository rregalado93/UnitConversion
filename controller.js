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
        

        
            
    }]);
    