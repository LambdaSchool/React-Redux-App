import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getSoloMinion } from '../store/actions';

const MinionPage = props => {
    const fetch = props.getSoloMinion;
    const { id } = useParams();

    useEffect(() => {
        fetch(id);
    }, [fetch, id]);

    return (
        <>
            {props.isFetching && <p>Loading...</p>}
            {!props.isFetching && props.soloMinion && (
                <div className='minion-page'>
                    <div className='minion-header'>
                        <img className='minion-icon' src={`https://xivapi.com${props.soloMinion.Icon}`} alt='minion icon' />
                        <h2 className='minion-page-name'>{props.soloMinion.Name}</h2>
                    </div>
                    <div className='minion-description'>
                        <p>Behavior: {props.soloMinion.Behavior.Name}</p>
                        <p>{props.soloMinion.Description}</p>
                        <p>{props.soloMinion.DescriptionEnhanced}</p>
                    </div>
                    <p className='minion-tooltip'>{props.soloMinion.Tooltip}</p>
                    <Link to='/'>Return</Link>
                </div>
            )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        soloMinion: state.soloMinion,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(mapStateToProps, { getSoloMinion })(MinionPage);
