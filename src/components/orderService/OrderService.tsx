import React, { FC, useState } from 'react'
import './OrderService.scss'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { send } from 'emailjs-com';

interface OrderServiceProps {
    title: string,
    info?: string
}

const OrderService: FC<OrderServiceProps> = ({ title, info }) => {
    const [userName, setUserName] = useState<string>("")
    const [userNameError, setUserNameError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")
    const [phone, setPhone] = useState<string>("+7")
    const [phoneError, setPhoneError] = useState<boolean>(false)
    const [loading, setLoading] = useState(false)
    const [sendError, setSendError] = useState(false)
    const [sendSuccess, setSendSuccess] = useState(false)

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onChangePhone = (e: string) => {
        const phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        console.log(e)
        if (e.length === 1 && Number(e)) {
            setPhone("+7" + e)
        }
        else if (Number(e.substring(1)) || "") {
            setPhone(e)
        }
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (userName.length <= 1) {
            setUserNameError(true)
            setTimeout(() => {
                setUserNameError(false)
            }, 3000)
        }
        else if (phone.length < 12) {
            setPhoneError(true)
            setTimeout(() => {
                setPhoneError(false)
            }, 3000)
        }
        else {
            onSend()
            setOpen(false);
        }
    }

    const onSend = () => {
        setLoading(true)
        setSendError(false)
        setSendSuccess(false)
        send(
            'service_p6ld4zl',
            'template_ffq5i2x',
            { from_name: userName, message, phone },
            'kjpQu_9IRGMk0L8Rb'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setPhone("+7")
                setMessage("")
                setUserName("")
                setLoading(false)
                setSendSuccess(true)
                setTimeout(() => {
                    setSendSuccess(false)
                }, 3000)
            })
            .catch((err) => {
                console.log('FAILED...', err);
                setLoading(false)
                setSendError(true)
                setTimeout(() => {
                    setSendError(false)
                }, 3000)
            });
    }

    return (
        <>
<div>
            <section className='order__content'>
                <div>
                    <Button className='order__content-btn' onClick={handleClickOpen}>
                        {title}
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle sx={{ backgroundColor: "#ff8506", color: "#fff" }}>{title}</DialogTitle>
                        <form onSubmit={e => onSubmit(e)}>
                            <DialogContent>
                                <DialogContentText sx={{ mt: 2, mb: 2 }}>
                                    Менеджеры компании с радостью ответят на ваши вопросы и произведут
                                    расчет стоимости услуг и подготовят индивидуальное коммерческое предложение.
                                </DialogContentText>

                                <TextField
                                    error={userNameError}
                                    autoFocus
                                    margin="dense"
                                    id="userName"
                                    label="Ваше имя"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    color="warning"
                                    value={userName}
                                    helperText="Введите ваше имя"
                                    onChange={e => setUserName(e.target.value)}
                                />
                                <TextField
                                    error={phoneError}
                                    margin="dense"
                                    id="phone"
                                    label="Телефон"
                                    type="phone"
                                    fullWidth
                                    variant="outlined"
                                    color="warning"
                                    value={phone}
                                    helperText="Введите ваш телефон"
                                    inputProps={{ maxLength: 12 }}
                                    onChange={e => onChangePhone(e.target.value)}
                                />
                                <TextField
                                    margin="dense"
                                    id="message"
                                    label="Сообщение:"
                                    type="text"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    color="warning"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button variant="outlined" color="warning" onClick={handleClose}>Отмена</Button>
                                <Button type="submit" variant="outlined" color="warning" >Отправить</Button>
                            </DialogActions>
                        </form>
                    </Dialog>
                </div>
                {info && (
                    <span className='order__content-text'>Оформите заявку на сайте. Наш менеджер свяжется с вами для уточнения деталей. </span>
                )}

            </section>
            <Stack sx={{ width: '100%' }} spacing={2}>
                {loading && (<Alert severity="warning">Сообщение отправляется</Alert>)}
                {sendError && (<Alert severity="error">Сообщение не отправлено, попробуйте снова</Alert>)}
                {sendSuccess && (<Alert severity="success">Сообщение отправлено</Alert>)}
            </Stack>
            </div>
        </>
    )
}

export default OrderService