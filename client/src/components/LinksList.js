import React from 'react';
import {Link} from "react-router-dom";

const LinksList = ({links}) => {
    if (!links.length) {
        return <p className='center'> Ссылок пока нет </p>
    }

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>N</th>
                    <th>Оригинальная</th>
                    <th>Сокращенная</th>
                    <th>Открыть</th>
                </tr>
                </thead>

                <tbody>
                {links.map((link, index) => {
                    return (
                        <tr key={link._id}>
                            <td>{index + 1}</td>
                            <td>{link.from}</td>
                            <td>{link.to}</td>
                            <td>
                                <Link to={`/detail/${link._id}`}>Отркыть</Link>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default LinksList;