import React from 'react'
import Hero from '../Hero/Hero'
import styles from './SupportIssues.module.css'

import Loading from '../Helpers/Loading'

import useFetch from '../../Hooks/useFetch';

import { SUPPORTS_GET } from '../../api';

const SuportsIssues = () => {
    const [data, setData] = React.useState([]);
    const { request, loading } = useFetch();

    React.useEffect(() => {
        const getAllSupportsCalls = async () => {
            const token = window.localStorage.getItem('token');

            const { url, options } = SUPPORTS_GET(token);
            const { json } = await request(url, options);
            console.log(json.data)
            setData(json.data);
        }
        getAllSupportsCalls();
    }, [request]);

    return (
        <div className={styles.container}>
            <Hero title="Confira os Chamados Abertos" />
            <div className={styles.tableContainer}>

                {loading ? <Loading style={{ height: '50px', width: '50px', marginTop: '4rem', marginBottom: '100%' }} /> : (
                    <table className={styles.styledTable}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Titulo</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((call) => {
                                return (
                                    <tr key={call.id} className={styles.activeRow}>
                                        <td data-label="ID">{call.id}</td>
                                        <td data-label="Titulo">{call.title}</td>
                                        <td data-label="Status">{call.statusChamado}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}

            </div>
        </div>
    )
}

export default SuportsIssues;