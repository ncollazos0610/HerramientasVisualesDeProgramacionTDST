import React from 'react'

interface GrandchildProps {
    message: string;
    setMessage: (newMessage: string) => void;
}

export const Grandchild = ({ message, setMessage }: GrandchildProps) => {
    return (
        <div className="p-4 border rounded-lg bg-gray-50 mt-3">
            <h4 className="text-md font-semibold text-purple-700">
                Componente Grandchild
            </h4>
            <p className="mb-2 text-gray-700">Mensaje recibido: {message}</p>

            <input type="text" className="border p-1 rounded w-full" value={message} onChange={(e) => setMessage(e.target.value)}/>
        </div>
    );
};

export default Grandchild;
