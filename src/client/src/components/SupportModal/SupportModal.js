import React from 'react'
import styles from './SupportModal.module.css'

import Button from '../Buttons/Button';
import Input from '../Form/Input';
import TextArea from '../Form/TextArea';
import Loading from '../Helpers/Loading';
import Error from '../Helpers/Error';

import useFetch from '../../Hooks/useFetch'

import closeButton from '../../assets/closeButton.svg'


import { SUPPORT_POST } from '../../api';

const SupportModal = ({ onClose }) => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [cpf, setCpf] = React.useState('');

    const { request, loading, error } = useFetch();

    const createNewSupport = async (e) => {
        e.preventDefault();

        if (
            title.length > 3
            && description.length > 3
            && status.length > 3
            && cpf.length > 3
        ) {
            const token = window.localStorage.getItem('token');
            const id = window.localStorage.getItem('id');

            const { url, options } = SUPPORT_POST({
                id: id,
                title: title,
                description: description,
                statusChamado: status,
                document: cpf,
                createDate: "2019-01-06T17:16:40",
                updateDate: "2019-01-06T17:16:40",
            }, token);

            await request(url, options);

            setCpf('');
            setDescription('');
            setStatus('');
            setTitle('');
            onClose();
        }
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.modalBody}>
                <button className={styles.closeButton} onClick={onClose}>
                    <img alt='Botao de Fechar' src={closeButton} />
                </button>
                <h1 className={styles.h1}>Relatar Problema</h1>
                <form onSubmit={createNewSupport}>
                    <Input
                        label='Título'
                        type="text"
                        name="title"
                        placeholder="Meu problema"
                        onChange={({ target }) => setTitle(target.value)}
                    />

                    <Input
                        label='Status do Chamado'
                        type="text"
                        name="title"
                        placeholder="Status"
                        onChange={({ target }) => setStatus(target.value)}
                    />

                    {/* <CheckBox value={status} name="name" title="Teste"/> */}

                    <Input
                        label='CPF'
                        type="text"
                        name="CPF"
                        placeholder="CPF"
                        onChange={({ target }) => setCpf(target.value)}
                    />

                    <TextArea onChange={({ target }) => setDescription(target.value)} placeholder="Descreva seu problema" label='Descrição' name="problem" />

                    {loading ? <Button disabled ><Loading style={{ height: '16px', width: '16px' }} /></Button> : <Button>Enviar</Button>}
                    {error && <Error error={error} />}
                </form>
            </div>
        </div >
    )
}

export default SupportModal;