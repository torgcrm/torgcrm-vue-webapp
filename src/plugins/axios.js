import axios from 'axios'

export const torgCRM = axios.create({
  baseURL: 'http://localhost:8080/torgcrm-web/',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsb2dpbiIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC90b3JnY3JtLXdlYi9hdXRoL2xvZ2luIiwiaWF0IjoxNTIxODc2OTI3LCJleHAiOjE1MjQ0Njg5Mjd9.HYlH0ICPkapaTLj0ZFs20TRgaWC_7PnzaeA6-RB_5WeEKMsRk4RVnBdMu3Z9CuYS-0QhjggdDwlkeX-JGs3X9A'
  }
})
