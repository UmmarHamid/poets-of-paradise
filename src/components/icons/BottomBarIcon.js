/**
 * Poets of Paradise
 *
 * @author      Ummar Hamid
 * @copyright   Ummar Hamid
 *
 * Built by Ummar Hamid
 * @link //insert link here
 *
 */

 import React from "react";
 import Svg, { G, Path, Rect } from "react-native-svg";
 import { Colors } from "../../themes/colors";
 
 export default ({ name, active = false, activeColor = Colors.DEEP_TEAL, passiveColor = Colors.BLUE_GREY }) => (
     <Svg width="24" height="24" viewBox="0 0 24 24">
         {
             name === "journey" &&
             <G transform="matrix(0.32,0,0,0.32,-4,-4)">
                 <Path
                     stroke={active ? activeColor : passiveColor} fill={active ? activeColor : passiveColor}
                     d="m 27.37,27.37 a 32,32 0 1 0 45.25,0 31.79,31.79 0 0 0 -45.25,0 z M 67,67 a 24,24 0 0 1 -34,0 v 0 a 24,24 0 1 1 34,0 z" id="path2" strokeWidth="1.2"
                 />
                 <Path
                     stroke={active ? activeColor : passiveColor} fill={active ? activeColor : passiveColor}
                     d="m 47.39,32.6 -8.1,16.21 a 2.67,2.67 0 0 0 0,2.39 l 8.1,16.21 a 2.92,2.92 0 0 0 5.23,0 l 8.1,-16.21 a 2.67,2.67 0 0 0 0,-2.39 L 52.61,32.6 a 2.92,2.92 0 0 0 -5.22,0 z m 5.44,20.23 a 4,4 0 1 1 0,-5.66 4,4 0 0 1 0,5.66 z" id="path4" strokeWidth="1.2"
                 />
             </G>
         }
         {
             name === "goals" &&
             <G transform="matrix(0.32,0,0,0.32,2,0)">
                 <Path
                     stroke={active ? activeColor : passiveColor} fill={active ? activeColor : passiveColor}
                     d="m 10.142857,46.607726 5.074285,-3.000371 3.051429,-1.780221 a 5.9542855,5.2106443 0 0 1 6.605714,0 l 6.102857,3.56044 a 24.239999,21.212623 0 0 0 26.891428,0 l 3.005714,-1.750215 a 9.245714,8.0910005 0 0 0 4.125714,-6.690828 V 13.183593 A 9.2571426,8.1010017 0 0 0 50.599999,6.4427588 l -2.868572,1.6802078 a 5.9542855,5.2106443 0 0 1 -6.605714,0 L 35.022856,4.5625263 a 24.239999,21.212623 0 0 0 -26.8914276,0 L 5.0799999,6.3427464 1,8.7130395 V 65 h 9.142857 z m 0,-33.614157 3.051428,-1.78022 a 15.097142,13.211633 0 0 1 16.754286,0 l 6.102857,3.56044 a 15.097142,13.211633 0 0 0 16.754285,0 l 2.88,-1.680207 h 0.06857 a 0.11428571,0.10001237 0 0 1 0.114286,0.100012 v 23.752937 a 0.11428571,0.10001237 0 0 1 -0.01143,0.05001 l -3.005714,1.750215 a 15.097142,13.211633 0 0 1 -16.754285,0 l -6.102855,-3.56044 a 15.097142,13.211633 0 0 0 -16.754285,0 l -3.097143,1.810225 z"
                     id="path2"
                     strokeWidth="1.06"
                 />
             </G>
         }
         {
             name === "home" &&
             <G transform="matrix(0.32,0,0,0.32,-4,-5)">
                 <Path
                     stroke={active ? activeColor : passiveColor} fill={active ? activeColor : passiveColor}
                     d="M 78.32,35.26 54.67,19.5 a 8.42,8.42 0 0 0 -9.34,0 L 21.69,35.26 A 8.27,8.27 0 0 0 18,42.15 V 72 A 10,10 0 0 0 28,82 H 72 A 10,10 0 0 0 82,72 V 42.15 A 8.26,8.26 0 0 0 78.32,35.26 Z M 74,72 a 2,2 0 0 1 -2,2 H 28 A 2,2 0 0 1 26,72 V 42.15 a 0.28,0.28 0 0 1 0.12,-0.23 L 49.77,26.15 a 0.322,0.322 0 0 1 0.326,0 L 73.88,41.92 A 0.28,0.28 0 0 1 74,42.15 Z"
                     id="path2"
                 />
                 <Rect
                     x="34"
                     y="60"
                     width="32"
                     height="8"
                     fill={active ? activeColor : passiveColor}
                     strokeWidth="3"
                     stroke={active ? activeColor : passiveColor}
                 />
             </G>
         }
         {
             name === "resources" &&
             <G transform="matrix(0.32,0,0,0.32,2,0)">
                 <Path
                     stroke={active ? activeColor : passiveColor} fill={active ? activeColor : passiveColor}
                     d="M 36.48,7.560907 33,9.532578 29.52,7.560907 A 55.11,62.447592 0 0 0 5,1 H 1 v 54.390935 h 4 a 47.07,53.33711 0 0 1 20.94,5.597734 L 33,65 40.06,61 A 47.07,53.33711 0 0 1 61,55.390935 h 4 V 1 H 61 A 55.11,62.447592 0 0 0 36.48,7.560907 Z M 9,46.495751 V 10.235127 a 47.11,53.382436 0 0 1 16.94,5.4051 L 29,17.407932 V 52.614731 A 55.16,62.504249 0 0 0 9,46.495751 Z m 48,0 a 55.16,62.504249 0 0 0 -20,6.11898 V 17.407932 l 3.06,-1.733711 A 47.11,53.382436 0 0 1 57,10.269122 Z"
                     id="path2"
                     strokeWidth="1.06"
                 />
             </G>
         }
         {
             name === "profile" &&
             <G transform="matrix(0.32,0,0,0.32,2,0)">
                 <Path
                     stroke={active ? activeColor : passiveColor} fill={active ? activeColor : passiveColor}
                     d="M 32.994538,1.0000005 A 32,32 0 1 0 62.474538,20.54 32,32 0 0 0 32.994538,1.0000005 Z M 18.534538,52.14 a 16,16 0 0 1 28.91,0 23.94,23.94 0 0 1 -28.91,0 z m 8.46,-23.14 a 6,6 0 1 1 6,6 6,6 0 0 1 -6,-6 z m 26.17,17 a 24.08,24.08 0 0 0 -9.17,-8.33 14,14 0 1 0 -22,0 23.81,23.81 0 0 0 -9.16,8.33 24,24 0 1 1 40.323,0 z"
                     id="path2"
                 />
             </G>
         }
     </Svg>
 );