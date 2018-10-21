import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.svg`
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linejoin: round;
  stroke-miterlimit: 1.41421;
  max-width: 240px;
`;

const DefaultPath = styled.path`
  fill-rule: nonzero;
`;

const ColoredPath = styled.path`
  fill: #083159;
  fill-rule: nonzero;
`;

export const Logo = () => {
  return (
    <StyledLogo
      width="100%"
      height="100%"
      viewBox="0 0 1334 139"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      xmlnsSerif="http://www.serif.com/"
    >
      <g transform="matrix(4.11214,0,0,4.11214,-331.765,-1438.54)">
        <ColoredPath d="M80.679,383.059c0.389,-5.599 0.705,-11.34 0.948,-17.224c0.243,-5.883 0.365,-10.38 0.365,-13.488l-0.024,-2.613l4.08,0.049c0.228,0 1.474,-0.016 3.738,-0.049c-0.664,8.561 -1.086,19.67 -1.264,33.325l-3.592,-0.048c-0.602,0 -2.019,0.016 -4.251,0.048Z" />
        <DefaultPath d="M95.377,383.059l0.829,-14.917l0.219,-7.006c0.032,-1.254 0.049,-2.165 0.049,-2.735c0.423,0.016 0.741,0.025 0.953,0.025c0.195,0 0.505,-0.009 0.928,-0.025l-0.329,5.567c0.359,-0.765 0.656,-1.347 0.892,-1.746c0.236,-0.399 0.558,-0.826 0.965,-1.282c0.407,-0.455 0.892,-0.883 1.453,-1.281c0.562,-0.399 1.238,-0.733 2.028,-1.001c0.79,-0.269 1.6,-0.464 2.431,-0.586c0.83,-0.122 1.653,-0.183 2.467,-0.183c1.368,0 2.695,0.154 3.982,0.463c1.286,0.31 2.353,0.843 3.2,1.6c0.847,0.756 1.429,1.627 1.746,2.612c0.318,0.985 0.477,2.038 0.477,3.161c0,0.505 -0.025,1.254 -0.073,2.247l-0.511,11.108l-0.097,3.979c-0.326,-0.016 -0.644,-0.024 -0.954,-0.024c-0.309,0 -0.619,0.008 -0.929,0.024c0.161,-2.034 0.29,-3.979 0.386,-5.835l0.338,-6.25c0.129,-2.311 0.193,-3.979 0.193,-5.004c0,-1.075 -0.154,-2.035 -0.463,-2.881c-0.31,-0.847 -0.842,-1.551 -1.599,-2.112c-0.756,-0.562 -1.655,-0.969 -2.696,-1.221c-1.042,-0.252 -2.115,-0.378 -3.222,-0.378c-1.545,0 -2.912,0.211 -4.1,0.635c-1.122,0.406 -2.107,1.005 -2.953,1.794c-0.845,0.789 -1.537,1.786 -2.074,2.991c-0.406,0.879 -0.716,2.107 -0.927,3.686c-0.194,1.367 -0.351,3.601 -0.473,6.702c-0.121,3.1 -0.181,5.725 -0.181,7.873c-0.424,-0.016 -0.75,-0.024 -0.978,-0.024c-0.228,0 -0.554,0.008 -0.977,0.024Z" />
        <DefaultPath d="M133.951,381.521c-0.13,0.489 -0.228,1.001 -0.293,1.538c-1.318,0.326 -2.531,0.489 -3.638,0.489c-0.928,0 -1.754,-0.102 -2.478,-0.305c-0.724,-0.204 -1.314,-0.57 -1.77,-1.099c-0.456,-0.529 -0.757,-1.115 -0.903,-1.758c-0.147,-0.643 -0.22,-1.33 -0.22,-2.063c0,-0.13 0.004,-0.334 0.012,-0.61c0.009,-0.277 0.038,-0.887 0.087,-1.831l0.815,-16.162l-3.014,0c0.066,-0.44 0.106,-0.879 0.123,-1.319l2.981,0c0.084,-1.025 0.151,-2.555 0.201,-4.59c0.615,-0.081 1.15,-0.187 1.603,-0.317c-0.115,2.637 -0.172,4.272 -0.172,4.907l7.325,0c-0.065,0.44 -0.106,0.879 -0.122,1.319l-7.287,0l-0.799,16.729l-0.025,1c0,1.366 0.159,2.358 0.477,2.976c0.317,0.617 0.765,1.064 1.343,1.341c0.579,0.276 1.177,0.415 1.796,0.415c0.44,0 0.908,-0.036 1.405,-0.106c0.497,-0.071 1.348,-0.255 2.553,-0.554Z" />
        <DefaultPath d="M156.241,380.642c-0.13,0.611 -0.228,1.229 -0.293,1.856c-1.351,0.391 -2.564,0.663 -3.638,0.818c-1.074,0.154 -2.173,0.232 -3.296,0.232c-1.953,0 -3.682,-0.265 -5.188,-0.793c-1.505,-0.528 -2.795,-1.407 -3.869,-2.634c-1.075,-1.228 -1.839,-2.606 -2.295,-4.134c-0.456,-1.529 -0.684,-3.155 -0.684,-4.879c0,-2.26 0.391,-4.378 1.172,-6.354c0.781,-1.975 2.067,-3.613 3.857,-4.914c1.791,-1.301 4.013,-1.951 6.666,-1.951c1.822,0 3.474,0.337 4.956,1.013c1.481,0.675 2.632,1.778 3.454,3.308c0.822,1.53 1.233,3.345 1.233,5.444c0,0.391 -0.016,0.765 -0.049,1.123l-19.336,0.025c-0.081,1.056 -0.122,1.852 -0.122,2.388c0,1.543 0.228,3.038 0.685,4.484c0.456,1.446 1.145,2.656 2.066,3.631c0.921,0.975 2.025,1.698 3.312,2.169c1.288,0.471 2.649,0.707 4.083,0.707c2.184,0 4.613,-0.513 7.286,-1.539Zm-17.09,-13.183l17.383,0.024c-0.016,-1.123 -0.082,-1.985 -0.196,-2.588c-0.114,-0.602 -0.326,-1.22 -0.635,-1.855c-0.31,-0.635 -0.681,-1.184 -1.113,-1.648c-0.432,-0.464 -0.937,-0.855 -1.516,-1.172c-0.578,-0.317 -1.226,-0.557 -1.943,-0.72c-0.717,-0.163 -1.467,-0.244 -2.249,-0.244c-0.864,0 -1.712,0.097 -2.543,0.293c-0.831,0.195 -1.589,0.464 -2.274,0.805c-0.684,0.342 -1.324,0.778 -1.919,1.306c-0.595,0.529 -1.084,1.103 -1.467,1.722c-0.383,0.618 -0.676,1.208 -0.88,1.77c-0.204,0.561 -0.42,1.33 -0.648,2.307Z" />
        <DefaultPath d="M162.833,383.059c0.195,-3.434 0.382,-7.47 0.561,-12.109c0.179,-4.639 0.268,-8.089 0.268,-10.352l-0.024,-2.197c0.325,0.016 0.627,0.025 0.903,0.025c0.293,0 0.594,-0.009 0.904,-0.025l-0.219,4.614c0.553,-1.106 1.066,-1.945 1.538,-2.514c0.472,-0.57 1.021,-1.046 1.648,-1.428c0.626,-0.383 1.359,-0.676 2.197,-0.879c0.838,-0.204 1.713,-0.305 2.624,-0.305c0.667,0 1.343,0.081 2.026,0.244c0,0.553 0.033,1.106 0.098,1.66c-1.091,-0.277 -2.036,-0.415 -2.834,-0.415c-0.782,0 -1.486,0.106 -2.113,0.317c-0.627,0.212 -1.213,0.521 -1.759,0.928c-0.546,0.407 -1.079,0.964 -1.6,1.672c-0.521,0.708 -0.912,1.461 -1.173,2.259c-0.326,0.927 -0.546,2.058 -0.66,3.393c-0.172,2.083 -0.281,4.46 -0.328,7.129c-0.062,3.597 -0.094,6.258 -0.094,7.983c-0.425,-0.016 -0.752,-0.024 -0.981,-0.024c-0.23,0 -0.557,0.008 -0.982,0.024Z" />
        <DefaultPath d="M178.555,383.059l0.829,-14.917l0.22,-7.006c0.032,-1.254 0.048,-2.165 0.048,-2.735c0.424,0.016 0.742,0.025 0.953,0.025c0.196,0 0.505,-0.009 0.929,-0.025l-0.329,5.567c0.358,-0.765 0.656,-1.347 0.892,-1.746c0.236,-0.399 0.557,-0.826 0.965,-1.282c0.407,-0.455 0.891,-0.883 1.453,-1.281c0.562,-0.399 1.238,-0.733 2.028,-1.001c0.789,-0.269 1.6,-0.464 2.43,-0.586c0.831,-0.122 1.653,-0.183 2.468,-0.183c1.368,0 2.695,0.154 3.981,0.463c1.287,0.31 2.354,0.843 3.201,1.6c0.846,0.756 1.429,1.627 1.746,2.612c0.318,0.985 0.476,2.038 0.476,3.161c0,0.505 -0.024,1.254 -0.072,2.247l-0.511,11.108l-0.098,3.979c-0.326,-0.016 -0.643,-0.024 -0.953,-0.024c-0.31,0 -0.619,0.008 -0.929,0.024c0.161,-2.034 0.29,-3.979 0.386,-5.835l0.338,-6.25c0.129,-2.311 0.193,-3.979 0.193,-5.004c0,-1.075 -0.155,-2.035 -0.464,-2.881c-0.309,-0.847 -0.842,-1.551 -1.598,-2.112c-0.757,-0.562 -1.655,-0.969 -2.697,-1.221c-1.041,-0.252 -2.115,-0.378 -3.221,-0.378c-1.546,0 -2.912,0.211 -4.1,0.635c-1.123,0.406 -2.107,1.005 -2.953,1.794c-0.846,0.789 -1.537,1.786 -2.074,2.991c-0.407,0.879 -0.716,2.107 -0.927,3.686c-0.194,1.367 -0.352,3.601 -0.473,6.702c-0.121,3.1 -0.182,5.725 -0.182,7.873c-0.423,-0.016 -0.749,-0.024 -0.977,-0.024c-0.228,0 -0.554,0.008 -0.978,0.024Z" />
        <DefaultPath d="M205.582,382.571c-0.033,-0.781 -0.098,-1.473 -0.196,-2.075c1.286,0.57 2.499,0.968 3.638,1.196c1.139,0.228 2.181,0.342 3.125,0.342c1.253,0 2.324,-0.179 3.211,-0.537c0.887,-0.357 1.558,-0.886 2.014,-1.585c0.455,-0.699 0.683,-1.431 0.683,-2.195c0,-0.342 -0.036,-0.671 -0.11,-0.988c-0.073,-0.317 -0.191,-0.634 -0.354,-0.951c-0.162,-0.317 -0.345,-0.61 -0.549,-0.878c-0.203,-0.269 -0.488,-0.573 -0.854,-0.915c-0.367,-0.341 -0.794,-0.723 -1.282,-1.146c-0.488,-0.423 -1.253,-1.065 -2.295,-1.927c-1.042,-0.862 -1.9,-1.606 -2.576,-2.232c-0.675,-0.626 -1.237,-1.26 -1.684,-1.902c-0.448,-0.642 -0.765,-1.232 -0.952,-1.768c-0.188,-0.536 -0.281,-1.081 -0.281,-1.634c0,-0.943 0.297,-1.858 0.891,-2.744c0.594,-0.886 1.448,-1.565 2.563,-2.036c1.115,-0.472 2.527,-0.707 4.236,-0.707c1.433,0 3.044,0.187 4.834,0.561c0.016,0.716 0.065,1.408 0.147,2.075c-1.042,-0.439 -1.974,-0.736 -2.796,-0.891c-0.822,-0.154 -1.656,-0.232 -2.502,-0.232c-1.058,0 -2.035,0.159 -2.93,0.476c-0.895,0.317 -1.566,0.78 -2.014,1.39c-0.448,0.61 -0.671,1.272 -0.671,1.988c0,0.39 0.048,0.756 0.146,1.097c0.098,0.342 0.252,0.687 0.464,1.037c0.212,0.349 0.484,0.707 0.818,1.073c0.333,0.366 0.765,0.789 1.294,1.268c0.529,0.48 1.294,1.138 2.295,1.976c1.001,0.837 1.745,1.471 2.234,1.902c0.488,0.431 0.907,0.825 1.257,1.183c0.35,0.358 0.684,0.752 1.001,1.183c0.317,0.431 0.574,0.85 0.769,1.256c0.195,0.406 0.342,0.817 0.439,1.231c0.098,0.415 0.147,0.834 0.147,1.256c0,1.025 -0.301,1.992 -0.903,2.903c-0.603,0.91 -1.477,1.626 -2.625,2.146c-1.147,0.521 -2.527,0.781 -4.138,0.781c-0.602,0 -1.355,-0.049 -2.258,-0.147c-0.904,-0.097 -1.628,-0.199 -2.173,-0.305c-0.546,-0.106 -1.233,-0.281 -2.063,-0.525Z" />
        <ColoredPath d="M224.966,383.059c0.308,-2.913 0.543,-6.184 0.705,-9.814l0.56,-11.963c0.194,-4.329 0.291,-8.179 0.291,-11.548c1.887,0.033 3.489,0.049 4.807,0.049c0.975,0 2.399,-0.016 4.269,-0.049c1.841,3.207 4.382,7.39 7.624,12.549c3.241,5.16 5.856,9.432 7.843,12.817l0.895,-22.656c0.016,-0.537 0.024,-1.44 0.024,-2.71c1.532,0.033 2.689,0.049 3.471,0.049c0.31,0 1.451,-0.016 3.423,-0.049l-0.608,8.96l-0.755,15.332l-0.291,9.033c-1.693,-0.032 -3.134,-0.048 -4.322,-0.048c-0.944,0 -2.474,0.016 -4.59,0.048c-0.814,-1.448 -1.433,-2.522 -1.856,-3.222c-0.668,-1.074 -2.092,-3.288 -4.274,-6.641c-1.433,-2.213 -3.224,-5.045 -5.373,-8.496c-1.579,-2.539 -2.931,-4.753 -4.054,-6.641c-0.13,2.637 -0.331,7.528 -0.605,14.673c-0.113,2.914 -0.202,6.356 -0.267,10.327c-1.531,-0.032 -2.639,-0.048 -3.324,-0.048c-0.537,0 -1.735,0.016 -3.593,0.048Z" />
        <DefaultPath d="M282.95,380.642c-0.13,0.611 -0.228,1.229 -0.293,1.856c-1.351,0.391 -2.564,0.663 -3.638,0.818c-1.074,0.154 -2.173,0.232 -3.296,0.232c-1.953,0 -3.682,-0.265 -5.188,-0.793c-1.505,-0.528 -2.795,-1.407 -3.869,-2.634c-1.075,-1.228 -1.839,-2.606 -2.295,-4.134c-0.456,-1.529 -0.684,-3.155 -0.684,-4.879c0,-2.26 0.391,-4.378 1.172,-6.354c0.781,-1.975 2.067,-3.613 3.857,-4.914c1.791,-1.301 4.013,-1.951 6.666,-1.951c1.822,0 3.474,0.337 4.956,1.013c1.481,0.675 2.632,1.778 3.454,3.308c0.822,1.53 1.233,3.345 1.233,5.444c0,0.391 -0.016,0.765 -0.049,1.123l-19.336,0.025c-0.081,1.056 -0.122,1.852 -0.122,2.388c0,1.543 0.228,3.038 0.685,4.484c0.456,1.446 1.145,2.656 2.066,3.631c0.921,0.975 2.025,1.698 3.312,2.169c1.288,0.471 2.649,0.707 4.083,0.707c2.184,0 4.613,-0.513 7.286,-1.539Zm-17.09,-13.183l17.383,0.024c-0.016,-1.123 -0.082,-1.985 -0.196,-2.588c-0.114,-0.602 -0.326,-1.22 -0.635,-1.855c-0.31,-0.635 -0.681,-1.184 -1.113,-1.648c-0.432,-0.464 -0.937,-0.855 -1.516,-1.172c-0.578,-0.317 -1.226,-0.557 -1.943,-0.72c-0.717,-0.163 -1.467,-0.244 -2.249,-0.244c-0.864,0 -1.712,0.097 -2.543,0.293c-0.831,0.195 -1.589,0.464 -2.274,0.805c-0.684,0.342 -1.324,0.778 -1.919,1.306c-0.595,0.529 -1.084,1.103 -1.467,1.722c-0.383,0.618 -0.676,1.208 -0.88,1.77c-0.204,0.561 -0.42,1.33 -0.648,2.307Z" />
        <DefaultPath d="M299.625,381.521c-0.131,0.489 -0.228,1.001 -0.293,1.538c-1.319,0.326 -2.531,0.489 -3.638,0.489c-0.928,0 -1.754,-0.102 -2.478,-0.305c-0.724,-0.204 -1.314,-0.57 -1.77,-1.099c-0.456,-0.529 -0.757,-1.115 -0.903,-1.758c-0.147,-0.643 -0.22,-1.33 -0.22,-2.063c0,-0.13 0.004,-0.334 0.012,-0.61c0.009,-0.277 0.037,-0.887 0.087,-1.831l0.815,-16.162l-3.014,0c0.065,-0.44 0.106,-0.879 0.122,-1.319l2.982,0c0.083,-1.025 0.151,-2.555 0.201,-4.59c0.615,-0.081 1.149,-0.187 1.603,-0.317c-0.115,2.637 -0.172,4.272 -0.172,4.907l7.325,0c-0.065,0.44 -0.106,0.879 -0.123,1.319l-7.286,0l-0.8,16.729l-0.024,1c0,1.366 0.159,2.358 0.476,2.976c0.318,0.617 0.766,1.064 1.344,1.341c0.578,0.276 1.177,0.415 1.796,0.415c0.44,0 0.908,-0.036 1.405,-0.106c0.496,-0.071 1.347,-0.255 2.553,-0.554Z" />
        <DefaultPath d="M309.767,383.059l-1.124,-3.393l-7.822,-21.265c0.423,0.016 0.756,0.025 1,0.025c0.244,0 0.577,-0.009 1,-0.025l0.977,3.002l3.814,10.74l2.664,7.152c0.228,0.586 0.562,1.416 1.002,2.49l2.34,-5.956l6.482,-17.428c0.409,0.016 0.784,0.025 1.127,0.025c0.359,0 0.743,-0.009 1.151,-0.025l6.5,23.413c4.099,-8.912 7.508,-16.716 10.225,-23.413c0.44,0.016 0.774,0.025 1.002,0.025c0.228,0 0.554,-0.009 0.977,-0.025l-9.489,20.972l-1.561,3.686c-0.57,-0.016 -1.018,-0.024 -1.344,-0.024c-0.341,0 -0.797,0.008 -1.367,0.024l-1.149,-4.565l-4.328,-15.771c-0.147,-0.489 -0.416,-1.343 -0.807,-2.564l-0.805,1.953l-7.072,19.092c-0.097,0.244 -0.301,0.863 -0.61,1.855c-0.569,-0.016 -1.033,-0.024 -1.391,-0.024c-0.375,0 -0.839,0.008 -1.392,0.024Z" />
        <DefaultPath d="M354.898,357.889c1.514,0 2.979,0.211 4.395,0.634c1.416,0.423 2.665,1.144 3.747,2.161c1.083,1.017 1.909,2.348 2.478,3.992c0.57,1.644 0.855,3.385 0.855,5.224c0,1.986 -0.301,3.89 -0.904,5.713c-0.602,1.823 -1.456,3.349 -2.563,4.578c-1.107,1.229 -2.405,2.095 -3.894,2.6c-1.489,0.504 -3.072,0.757 -4.749,0.757c-1.172,0 -2.323,-0.135 -3.454,-0.403c-1.131,-0.269 -2.189,-0.72 -3.174,-1.355c-0.985,-0.635 -1.847,-1.457 -2.588,-2.466c-0.741,-1.009 -1.302,-2.205 -1.685,-3.589c-0.382,-1.383 -0.573,-2.824 -0.573,-4.321c0,-2.621 0.488,-5.017 1.465,-7.19c0.976,-2.173 2.437,-3.772 4.382,-4.797c1.945,-1.026 4.032,-1.538 6.262,-1.538Zm-0.049,1.367c-1.937,0 -3.735,0.471 -5.395,1.414c-1.66,0.943 -2.881,2.382 -3.662,4.317c-0.782,1.935 -1.172,4.056 -1.172,6.365c0,1.626 0.224,3.154 0.671,4.585c0.448,1.431 1.168,2.638 2.161,3.622c0.993,0.983 2.063,1.666 3.21,2.048c1.148,0.382 2.356,0.574 3.626,0.574c1.448,0 2.807,-0.236 4.077,-0.708c1.269,-0.471 2.388,-1.26 3.357,-2.365c0.968,-1.106 1.68,-2.464 2.136,-4.073c0.456,-1.61 0.684,-3.317 0.684,-5.122c0,-1.674 -0.224,-3.247 -0.672,-4.719c-0.447,-1.471 -1.143,-2.65 -2.087,-3.536c-0.944,-0.886 -2.018,-1.508 -3.223,-1.866c-1.204,-0.357 -2.441,-0.536 -3.711,-0.536Z" />
        <DefaultPath d="M371.573,383.059c0.195,-3.434 0.382,-7.47 0.561,-12.109c0.179,-4.639 0.268,-8.089 0.268,-10.352l-0.024,-2.197c0.326,0.016 0.627,0.025 0.904,0.025c0.292,0 0.594,-0.009 0.903,-0.025l-0.219,4.614c0.554,-1.106 1.066,-1.945 1.538,-2.514c0.472,-0.57 1.022,-1.046 1.648,-1.428c0.627,-0.383 1.359,-0.676 2.197,-0.879c0.838,-0.204 1.713,-0.305 2.624,-0.305c0.668,0 1.343,0.081 2.027,0.244c0,0.553 0.032,1.106 0.097,1.66c-1.091,-0.277 -2.036,-0.415 -2.834,-0.415c-0.781,0 -1.486,0.106 -2.113,0.317c-0.627,0.212 -1.213,0.521 -1.759,0.928c-0.545,0.407 -1.079,0.964 -1.6,1.672c-0.521,0.708 -0.912,1.461 -1.173,2.259c-0.326,0.927 -0.545,2.058 -0.659,3.393c-0.172,2.083 -0.282,4.46 -0.328,7.129c-0.063,3.597 -0.094,6.258 -0.094,7.983c-0.426,-0.016 -0.753,-0.024 -0.982,-0.024c-0.229,0 -0.557,0.008 -0.982,0.024Z" />
        <DefaultPath d="M387.54,383.059c0.211,-3.336 0.39,-7.039 0.536,-11.108l0.391,-12.427c0.13,-4.215 0.195,-7.479 0.195,-9.79c0.423,0.016 0.757,0.025 1.001,0.025c0.245,0 0.578,-0.009 1.002,-0.025l-0.287,4.883l-0.788,23.12l-0.096,5.322c-0.445,-0.016 -0.775,-0.024 -0.99,-0.024c-0.214,0 -0.536,0.008 -0.964,0.024Zm2.49,-13.708l6.641,-6.365l2.076,-2.048c0.325,-0.342 0.647,-0.683 0.964,-1.025c0.318,-0.341 0.786,-0.845 1.404,-1.512c0.407,0.016 0.83,0.025 1.269,0.025c0.439,0 0.854,-0.009 1.245,-0.025l-8.612,8.17c-0.781,0.715 -1.74,1.642 -2.879,2.78l8.832,9.554l3.953,4.154c-0.408,-0.016 -0.816,-0.024 -1.224,-0.024c-0.44,0 -0.856,0.008 -1.248,0.024l-5.149,-5.791l-7.272,-7.917Z" />
      </g>
    </StyledLogo>
  );
};

export default Logo;