import React, { useEffect, useState } from 'react'
import { AppDispatch, RootState } from './../../store'
import { useSelector, useDispatch } from 'react-redux'
import { createCat, fetchAllCats } from './catsSlice'


export function Cats() {
  const cats: any[] = useSelector((state: RootState) => state.cats.cats)
  const dispatch = useDispatch<AppDispatch>()

  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(`Name: ${name}, Color: ${color}`);

    dispatch(createCat({name, color}));
  }

  useEffect(() => {
    dispatch(fetchAllCats())
  }, [])

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
        </label>
        <label>
            Color:
            <input
            type="text"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            />
        </label>
        <button type="submit">Submit</button>
        </form>

        <div>
            {cats.map((cat) => (
                <div key={cat.id}>
                    {cat.name} - {cat.color}
                </div>
            ))}
        </div>
    </div>
  );
}