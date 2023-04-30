import React from 'react';

const Form = () => {
    return (
        <form>
            <div className='mb-3'>
                <label htmlFor='title' className='form-label'>Title</label>
                <input type='text' id='title' className='form-control' />
            </div>
            <div className='mb-3'>
                <label htmlFor='company' className='form-label'>Company</label>
                <input type='text' id='company' className='form-control' />
            </div>
            <div className='mb-3'>
                <label htmlFor='year' className='form-label'>Year</label>
                <input type='text' id='year' className='form-control' />
            </div>
        </form>
    );
}