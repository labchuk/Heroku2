import React, { Fragment, useState, FC } from 'react';
import './Like.scss'
import { VKShareButton, TelegramShareButton, FacebookShareButton } from 'react-share'
import { VKIcon, FacebookIcon, TelegramIcon } from "react-share";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AdminEditCardPanel from '../../admin/AdminEditCardPanel/AdminEditCardPanel';


interface LikeProps {
    discount?: {
        id: number,
        place: string,
        nameDiscount: string,
        sizeDiscount: string,
        date: string
    },
    cards: {
        id: number,
        place: string,
        nameDiscount: string,
        sizeDiscount: string,
        date: string
    }[],
    updateData: (data: any) => void,
}


const Like: FC<LikeProps> = (props) => {
    const [state, setState] = useState({
        firstModal: false,
        secondModal: false
    }
    )
    const cardMore = () => {
        setState(prev => {
            return {
                ...prev,
                firstModal: !state.firstModal
            }
        })
    }
    const cardMoreSocial = () => {
        setState(prev => {
            return {
                ...prev,
                secondModal: !state.secondModal
            }
        })
    };

    const deleteCard = (currentCard: any) => {
        const filteredArr = props.cards.filter((item: any) => item.id !== currentCard.id);
        props.updateData(filteredArr)
    }
    return (
        <Fragment>
            <div className="card-buttons">
                <button className="card-buttons__item">
                    <img src="image/icons/Like.svg" alt="" />
                </button>
                <button className="card-buttons__item" onClick={cardMoreSocial}>
                    <img src="image/icons/Share.svg" alt="" />
                </button>
                <button className="card-buttons__item" onClick={() => deleteCard(props.discount)}>
                    <DeleteOutlineIcon style={{ color: '#d32f2f', fontSize: 30 }} />
                </button>
                <button className="card-buttons__info" onClick={cardMore}>
                    <img src="image/icons/Info.svg" alt="" />
                </button>
            </div>
            {state.firstModal === true ? (
                <div className="card-container">
                    <div className="card-drop" onClick={() => { setState(prev => { return { ...prev, firstModal: false, secondModal: false } }) }} />
                    <div className="card-more">
                        <button className="card-more__item">
                            <img src="image/icons/Like-back.svg" alt="" />
                        </button>
                        <button className="card-more__item" onClick={cardMoreSocial}>
                            <img src="image/icons/Share-back.svg" alt="" />
                        </button>
                        <button className="card-more__item">
                            <img src="image/icons/Remake-back.svg" alt="" />
                        </button>
                        <button className="card-more__item" onClick={cardMore}>
                            <img src="image/icons/Close-back.svg" alt="" />
                        </button>
                    </div>
                </div>
            ) :
                null}
            {state.secondModal === true ? (
                <div className="card-container">
                    <div className="card-drop" onClick={() => { setState(prev => { return { ...prev, firstModal: false, secondModal: false } }) }} />
                    <div className="card-more">
                        <FacebookShareButton
                            url="https://github.com/khramyka/front-end-team2/tree/SearchBar/public">
                            <FacebookIcon size={45} round={true}></FacebookIcon>
                        </FacebookShareButton>
                        <TelegramShareButton
                            url="https://github.com/khramyka/front-end-team2/tree/SearchBar/public">

                            <TelegramIcon size={45} round={true}></TelegramIcon>
                        </TelegramShareButton>
                        <VKShareButton
                            url="https://github.com/khramyka/front-end-team2/tree/SearchBar/public">

                            <VKIcon size={45} round={true}></VKIcon>
                        </VKShareButton>
                    </div>
                </div>
            ) : null}

        </Fragment>

    );
};

export default Like;