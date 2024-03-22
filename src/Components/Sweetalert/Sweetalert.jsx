import React from 'react';
import Swal from 'sweetalert2';

const WinnerSweetAlert = ({ winner, onConfirm }) => {
    const showWinnerAlert = () => {
        Swal.fire({
            title: winner === 'Draw' ? 'It\'s a Draw!' : `Player ${winner.toUpperCase()} wins!`,
            icon: 'success',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                onConfirm();
            }
        });
    };

    return (
        <div>
            {showWinnerAlert()}
        </div>
    );
};

export default WinnerSweetAlert;
