package dk.sdu.mmmi.mdev

import android.content.Context
import android.content.Intent
import android.graphics.BitmapFactory
import android.os.Handler
import android.os.Looper
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView
import dk.sdu.mmmi.mdev.models.MovieModel
import dk.sdu.mmmi.mdev.viewmodels.MovieViewModel
import java.io.Serializable
import java.lang.Exception
import java.util.concurrent.Executors

class MovieAdapter(val viewModel: MovieViewModel, val context: Context): RecyclerView.Adapter<MovieAdapter.ViewHolder>() {

    //private var titles = arrayOf("One","Two","Tree","Four","Five","Six","Seven","Eight","Nine","Ten");

    private val imagePath: String = context.getString(R.string.img_path)

    inner class ViewHolder(itemView: View): RecyclerView.ViewHolder(itemView) {
        var itemImage: ImageView;
        var itemTitle: TextView;

        init {
            itemImage = itemView.findViewById(R.id.item_image);
            itemTitle = itemView.findViewById(R.id.item_title);

            itemView.setOnClickListener {
                val intent = Intent(itemView.context, MovieActivity::class.java)
                intent.putExtra("MOVIE", viewModel.getAll()[adapterPosition] as Serializable)
                itemView.context.startActivity(intent)
            }
        }

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.card_layout, parent, false);
        return ViewHolder(view);
    }

    override fun getItemCount(): Int {
        if (viewModel.getAll().size==0) {
            Log.d("Adapter","No items in viewmodel")
        }
        return viewModel.getAll().size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.itemTitle.text = viewModel.getAll()[position].title
        val fullPath: String = imagePath + viewModel.getAll()[position].backdrop_path
        val handler = Handler(Looper.getMainLooper())
        val executor = Executors.newSingleThreadExecutor()
        executor.execute {
            try {
                val `in` = java.net.URL(fullPath).openStream()
                val image = BitmapFactory.decodeStream(`in`)
                handler.post{
                    holder.itemImage.setImageBitmap(image)
                }
            }
            catch (e: Exception) {
                Log.e("Error", e.message.toString())
            }
        }
    }

}