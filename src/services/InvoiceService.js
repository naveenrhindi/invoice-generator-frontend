import axios from "axios"
    
export const saveInvoice = (baseURL, payload, token) => {
    return axios.post(`${baseURL}/invoices`,payload, {headers:{Authorization: `Bearer ${token}`}})
}

export const getAllInvoices = (baseURL, token) => {
    return axios.get(`${baseURL}/invoices`, {headers:{Authorization: `Bearer ${token}`}});
}

export const deleteInvoice = (baseURL, id, token) => {
    return axios.delete(`${baseURL}/invoices/${id}`, {headers:{Authorization: `Bearer ${token}`}})
}

export const sendInvoice = (baseURL, formData, token) => {
    return axios.post(`${baseURL}/invoices/send-invoice`, formData, {headers:{Authorization: `Bearer ${token}`}});
}